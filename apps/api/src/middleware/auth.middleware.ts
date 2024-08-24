import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware {
  verifyTokenUser(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) throw 'Token empty';
      const user = verify(token, process.env.SECRET_KEY!);
      req.user = user as User;
      next();
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }
  // verifyTokenEo(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     let token = req.headers.authorization?.replace('Bearer ', '');
  //     if (!token) throw 'Token empty';
  //     const eo = verify(token, process.env.SECRET_KEY_ADMIN!);
  //     req.eo = eo as EO;
  //     next();
  //   } catch (err) {
  //     res.status(400).send({
  //       status: 'error',
  //       msg: err,
  //     });
  //   }
  // }
}
