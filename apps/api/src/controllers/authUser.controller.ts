// export const authUser = () => {

// }
import { createToken } from '@/helpers/createToken';
import { generateReferralNumber } from '@/helpers/generateReferral';
import { hashPass } from '@/helpers/hashPassword';
import { transporter } from '@/helpers/nodemailer';
import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { generate } from 'referral-codes';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
export class AuthUser {
  async regUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [
            { username: req.body.username },
            { email: req.body.email },
            { phoneNumber: req.body.phoneNumber },
          ],
        },
      });
      const checkRefcode = req.body.referral;
      const refCode = await prisma.user.findFirst({
        where: { referralCode: req.body.referral },
      });
      if (checkRefcode) {
        if (!refCode) throw 'user with this referall not found';
      }
      if (user?.username) throw 'username has been used';
      if (user?.email) throw 'email has been used';
      if (user?.phoneNumber) throw 'phone number has been used';

      const password = await hashPass(req.body.password);
      const referralCode = await generateReferralNumber();
      const newUser = await prisma.user.create({
        data: { ...req.body, password, referralCode },
      });
      const token = createToken({ id: newUser.id, role: 'user' });
      const templatePath = path.join(__dirname, '../templates', 'verify.hbs');
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username: req.body.username,
        link: `http://localhost:3000/verify/${token}`,
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: req.body.email,
        subject: 'Welcome to Ticketist',
        html,
      });

      res.status(200).send({
        status: 'OK',
        msg: 'user created',
        token,
      });
    } catch (error) {
      responseError(res, error);
      console.log(error);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.data }, { email: req.body.data }],
        },
      });

      if (!user) throw 'User not found';
      const isValidPass = await compare(req.body.password, user.password);
      if (!isValidPass) throw 'password is incorrect';
      if (!user.isVerify) throw 'User not verify';
      const token = createToken({ id: user.id, role: 'user' });
      if (user.createdAt && user.referral) {
        const currentDate = new Date();
        const expirationDate = new Date(user.createdAt);
        expirationDate.setMonth(expirationDate.getMonth() + 3);
        if (currentDate > expirationDate) {
          await prisma.user.update({
            where: {
              referralCode: user.referral !== null ? user.referral : undefined,
            },
            data: { point: { decrement: 10000 } },
          });
          await prisma.user.update({
            where: { id: user.id },
            data: { referral: null },
          });
        }
      }

      if (user.referralCode !== '') {
        const updateAllReferal = await prisma.user.updateMany({
          where: {
            createdAt: {
              lt: new Date(new Date().setMonth(new Date().getMonth() - 3)),
            },
          },
          data: {
            referral: '',
          },
        });

        const updatePoint = await prisma.user.update({
          where: { referralCode: user.referralCode! },
          data: { point: { decrement: updateAllReferal.count * 10000 } },
        });
      }
      if (user.point < 0) {
        await prisma.user.update({
          where: { id: user.id },
          data: { point: 0 },
        });
      }
      res.status(200).send({
        status: 'OK',
        msg: 'Login Success',
        token: token,
        user,
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async verifyUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
      });
      if (user?.isVerify) throw 'User has already been Verified!';
      await prisma.user.update({
        where: { id: req.user?.id },
        data: { isVerify: true },
      });
      if (user?.referral) {
        await prisma.user.update({
          data: { point: { increment: 10000 } },
          where: { referralCode: user?.referral },
        });
      }
      res.status(200).send({
        status: 'ok',
        msg: 'User Verified!',
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async DecodeToken(req: Request, res: Response) {
    try {
      res.status(200).send({
        user: req.user,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async GetUserByID(req: Request, res: Response) {
    try {
      const data = await prisma.user.findUnique({
        where: { id: req.user?.id },
      });
      res.status(200).send({
        data,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
