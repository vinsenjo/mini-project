// import { Router } from 'express';
// import { EventController } from '@/controllers/event.controller';
// import { AuthMiddleware } from '@/middleware/auth.middleware';
// import { uploader } from '@/helpers/uploader';
// export class EventRouter {
//   private router: Router;
//   private verifyMiddleware: AuthMiddleware;
//   private eventController: EventController;

//   constructor() {
//     this.eventController = new EventController();
//     this.verifyMiddleware = new AuthMiddleware();
//     this.router = Router();
//     this.initializeRoutes();
//   }
//   private initializeRoutes(): void {
//     this.router.post(
//       '/',
//       this.verifyMiddleware.verifyTokenEo,
//       uploader("event","/eventImg").single("media"),
//       this.eventController.createEvent,
//     );
//     this.router.get('/', this.eventController.getEvent);
//     this.router.get('/:id', this.eventController.getEventById);

//   }
//   getRouter(): Router {
//     return this.router;
//   }
// }

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
    // Route to create a new event with authentication and file upload
    this.router.post(
      '/',
      this.verifyMiddleware.verifyTokenUser,
      uploader('event', '/eventImg').single('media'),
      this.eventController.createEvent,
    );

    // Route to get a list of events
    this.router.get('/', this.eventController.getEvent);

    //get event by event organizer
    this.router.get(
      '/eo',
      this.verifyMiddleware.verifyTokenUser,
      this.eventController.getEventByEo,
    );
    // Route to get a specific event by ID
    this.router.get('/:id', this.eventController.getEventById);

  }

  public getRouter(): Router {
    return this.router;
  }
}
