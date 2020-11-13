import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleWare();
    this.routes();
  }

  private middleWare(): void {
    this.express.use(express.json());
    this.express.use(morgan(':method :url :status'));
    this.express.use(cors());
  }

  private routes(): void {
    this.express.get('/', (req, res) => res.send('OK'))
  }
}

export default new App().express;