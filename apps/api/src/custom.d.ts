type User = {
  id: number;
};

declare namespace Express {
  export interface Request {
    user?: User;
  }
}

type EO = {
  id: number;
};

declare namespace Express {
  export interface Request {
    eo?: EO;
  }
}

type Event = {
  id: number;
};

declare namespace Express {
  export interface Request {
    event?: Event;
  }
}
