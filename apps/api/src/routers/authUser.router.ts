import { AuthUser } from '@/controllers/authUser.controller';
import { Router } from 'express';

export class AuthRouterUser {
  private router: Router;
  private authUser: AuthUser;

  constructor() {
    this.authUser = new AuthUser();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authUser.regUser);
    this.router.post('/login', this.authUser.loginUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
