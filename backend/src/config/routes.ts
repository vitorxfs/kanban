import { Application } from 'express';

const configRoutes = (app: Application): void => {
  app.get('/ping', (_, res) => res.send('pong'));
};

export default configRoutes;
