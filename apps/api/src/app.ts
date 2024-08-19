import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
// import { SampleRouter } from './routers/sample.router';
import { AuthRouterUser } from './routers/authUser.router';
import { AuthEo } from './controllers/authEo.controller';
import { AuthRouterEo } from './routers/authEo.router';
import { EventController } from './controllers/event.controller';
import { EventRouter } from './routers/event.router';
import path from 'path'
export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  // private routes(): void {
  //   const sampleRouter = new SampleRouter();

  //   this.app.get('/api', (req: Request, res: Response) => {
  //     res.send(`Hello, Purwadhika Student API!`);
  //   });

  //   this.app.use('/api/samples', sampleRouter.getRouter());
  // }

  private routes(): void {
    const userAuth = new AuthRouterUser();
    const eoAuth = new AuthRouterEo();
    const event = new EventRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });
    this.app.use('/api/public', express.static(path.join(__dirname, '../public')))
    this.app.use('/api/user', userAuth.getRouter());
    this.app.use('/api/eo', eoAuth.getRouter());
    this.app.use('/api/event', event.getRouter())
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local: http://localhost:${PORT}/`);
    });
  }
}
