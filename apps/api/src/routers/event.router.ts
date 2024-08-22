import { Router } from 'express';
import { EventController } from '@/controllers/event.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { uploader } from '@/helpers/uploader';
export class EventRouter {
  private router: Router;
  private verifyMiddleware: AuthMiddleware;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.verifyMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post(
      '/',
      this.verifyMiddleware.verifyTokenEo,
      uploader("event","/eventImg").single("media"),
      this.eventController.createEvent,
    );
    this.router.get('/', this.eventController.getEvent);
    this.router.get('/:id', this.eventController.getEventById);
    
  }
  getRouter(): Router {
    return this.router;
  }
}
