import mongoose from 'mongoose';

import { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } from '../env';

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
);
mongoose.connection.on('error', () => console.error('ERROR::databese connection error'));
mongoose.connection.once('open', () => console.log('SUCCEEDED::database connected'));
