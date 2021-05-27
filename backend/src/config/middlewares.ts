import bodyParser from 'body-parser';
import { Application } from 'express';

export const configBeforeMiddlewares = (app: Application): void => {
  app.use(bodyParser.json());
};
