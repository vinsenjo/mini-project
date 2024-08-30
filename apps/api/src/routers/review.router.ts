import { ReviewController } from '@/controllers/review.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class ReviewRouter {
  private router: Router;
  private verifyMiddleware: AuthMiddleware;
  private reviewController: ReviewController;

  constructor() {
    this.router = Router();
    this.verifyMiddleware = new AuthMiddleware();
    this.reviewController = new ReviewController();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post(
      '/',
      this.verifyMiddleware.verifyTokenUser,
      this.reviewController.createReview,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
