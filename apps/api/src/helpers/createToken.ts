import { sign } from 'jsonwebtoken';

interface IPayload {
  id: number;
}
const key = process.env.SECRET_KEY || '';

export const createToken = (payload: IPayload) => {
  const token = sign(payload, process.env.SECRET_KEY!, { expiresIn: '1d' });
  return token;
};
