// export const authUser = () => {

// }
import { createToken } from '@/helpers/createToken';
import { generateReferralNumber } from '@/helpers/generateReferral';
import { hashPass } from '@/helpers/hashPassword';
import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { generate } from 'referral-codes';

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
      const checkRefcode = req.body.refferal;
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
      await prisma.user.create({
        data: { ...req.body, password, referralCode },
      });
      res.status(200).send({
        status: 'OK',
        msg: 'user created',
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
      const token = createToken({ id: user.id });
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
      res.status(200).send({
        status: 'ok',
        msg: 'User Verified!',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
