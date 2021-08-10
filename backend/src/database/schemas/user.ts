import { model, Schema } from 'mongoose';

export interface UserDbAttributes {
  _id: string;
  name: string;
  surname: string;
  email: string;
}

const userSchema = new Schema<UserDbAttributes>({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = model('User', userSchema);
