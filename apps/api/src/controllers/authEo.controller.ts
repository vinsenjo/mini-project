import {  createToken } from '@/helpers/createToken';
import { hashPass } from '@/helpers/hashPassword';
import { responseError } from '@/helpers/responseError';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { transporter } from '@/helpers/nodemailer';

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
      const newEo = await prisma.eO.create({
        data: { ...req.body, password },
      });
      const token = createToken({ id: newEo.id, role: 'eo' });
      const templatePath = path.join(__dirname, '../templates', 'verify.hbs');
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username: req.body.username,
        link: `http://localhost:3000/verifyEo/${token}`,
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: req.body.email,
        subject: 'Welcome to Ticketist',
        html,
      });
      res.status(200).send({
        status: 'OK',
        msg: 'event creator created',
        token,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  async loginEo(req: Request, res: Response) {
    try {
      const creator = await prisma.eO.findFirst({
        where: {
          OR: [{ creator: req.body.data }, { email: req.body.data }],
        },
      });
      if (!creator) throw 'Creator not found';
      const isValidPass = await compare(req.body.password, creator.password);
      if (!isValidPass) throw 'password is incorrect';
      if (!creator.isVerify) throw 'Event Creator not verify';
      const token = createToken({ id: creator.id, role: 'eo' });
      res.status(200).send({
        status: 'OK',
        msg: 'Login Success',
        token: token,
        creator,
      });
    } catch (error) {
      console.log(error);
      responseError(res, error);
    }
  }
  async verifyEo(req: Request, res: Response) {
    try {
      const eo = await prisma.eO.findUnique({
        where: { id: req.user?.id },
      });
      if (eo?.isVerify) throw 'Event Creator has already been Verified!';
      await prisma.eO.update({
        where: { id: req.user?.id },
        data: { isVerify: true },
      });
      res.status(200).send({
        status: 'ok',
        msg: 'Event Creator Verified!',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
