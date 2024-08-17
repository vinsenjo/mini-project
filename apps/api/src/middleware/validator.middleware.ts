import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export class Validator {
  validateRegister = [
    body('username').notEmpty().withMessage('username required'),
    body('email')
      .notEmpty()
      .withMessage('email required')
      .isEmail()
      .withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('password required'),

    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          err: errors.array(),
        });
      }
      next();
    },
  ];
}
