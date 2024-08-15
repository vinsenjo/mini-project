import { AuthEo } from '@/controllers/authEo.controller';
import { Router } from 'express';

export class AuthRouterEo {
  private router: Router;
  private authEo: AuthEo;

  constructor() {
    this.authEo = new AuthEo();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authEo.regEo);
    // this.router.post('/login', this.a.loginUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
