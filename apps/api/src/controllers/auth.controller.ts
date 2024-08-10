// export const authUser = () => {

// }
import { createToken } from '@/helpers/createToken';
import { generateReferralNumber } from '@/helpers/generateReferral';
import { hashPass } from '@/helpers/hashPassword';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { generate } from 'referral-codes';

export class AuthUser {
  async regUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
        },
      });
      if (user?.username) throw 'username has been used';
      if (user?.email) throw 'email has been used';
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
      return res.status(400).send({
        status: 'Error',
        msg: error,
      });
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
      console.log(error);
      return res.status(400).send({
        status: 'Error',
        msg: error,
      });
    }
  }

  
  async regEo(req: Request, res: Response) {
    try {
      const organizer = await prisma.eO.findFirst({
        where: {
          OR: [{ creator: req.body.creator }, { email: req.body.email }],
        },
      });
      if (organizer?.creator) throw 'creator name has been used';
      if (organizer?.email) throw 'email has been used';
      const password = await hashPass(req.body.password);
      await prisma.user.create({
        data: { ...req.body, password },
      });
      res.status(200).send({
        status: 'OK',
        msg: 'user created',
      });
    } catch (error) {
      return res.status(400).send({
        status: 'Error',
        msg: error,
      });
    }
  }
}
