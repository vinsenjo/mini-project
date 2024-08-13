import { createToken } from '@/helpers/createToken';
import { hashPass } from '@/helpers/hashPassword';
import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';

export class AuthEo {
  async regEo(req: Request, res: Response) {
    try {
      const creator = await prisma.eO.findFirst({
        where: {
          OR: [{ creator: req.body.username }, { email: req.body.email }],
        },
      });

      if (creator?.creator) throw 'username has been used';
      if (creator?.email) throw 'email has been used';
      const password = await hashPass(req.body.password);
      await prisma.eO.create({
        data: { ...req.body, password },
      });
      res.status(200).send({
        status: 'OK',
        msg: 'event creator created',
      });
    } catch (error) {
      responseError(res, error);
      console.log(error);
    }
  }
}
