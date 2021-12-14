import { model, Schema } from 'mongoose';

export interface UserDbAttributes {
  _id: string;
  email: string;
  name: string;
  password: string;
  surname: string;
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
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export const User = model('User', userSchema);
