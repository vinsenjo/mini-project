import { AuthUser } from '@/controllers/authUser.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Validator } from '@/middleware/validator.middleware';
import { Router } from 'express';

export class AuthRouterUser {
  private router: Router;
  private authUser: AuthUser;
  private validator: Validator;
  private verifyMiddleware: AuthMiddleware;
  constructor() {
    this.authUser = new AuthUser();
    this.validator = new Validator();
    this.verifyMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      this.validator.validateRegister,
      this.authUser.regUser,
    );
    this.router.post('/login', this.authUser.loginUser);
    this.router.patch(
      '/verify',
      this.verifyMiddleware.verifyTokenUser,
      this.authUser.verifyUser,
    );
    this.router.get(
      '/',
      this.verifyMiddleware.verifyTokenUser,
      this.authUser.DecodeToken,
    );
    this.router.get(
      '/profile',
      this.verifyMiddleware.verifyTokenUser,
      this.authUser.GetUserByID,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
