import mongoose from 'mongoose';

import { MONGO_URL } from '../env';

const configDB = () => {
  mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on('error', (err) => console.log(`MongoDB connection error: ${err}`));
};

export default configDB;
