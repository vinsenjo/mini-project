import { AuthEo } from '@/controllers/authEo.controller';
import { Validator } from '@/middleware/validator.middleware';
import { Router } from 'express';

export class AuthRouterEo {
  private router: Router;
  private authEo: AuthEo;
  private validator: Validator;
  constructor() {
    this.validator = new Validator();
    this.authEo = new AuthEo();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      this.authEo.regEo,
    );
    this.router.post('/login', this.authEo.loginEo);
  }

  getRouter(): Router {
    return this.router;
  }
}
