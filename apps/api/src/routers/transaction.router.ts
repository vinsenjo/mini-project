import { TransactionController } from '@/controllers/transaction.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private verifyMiddleware: AuthMiddleware;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.verifyMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      this.verifyMiddleware.verifyTokenUser,
      this.transactionController.createTransaction,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
