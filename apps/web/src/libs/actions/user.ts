import { ISignUp, UserLogin, UserState } from '@/types/user';
export const registerUser = async (data: ISignUp) => {
  const res = await fetch('http://localhost:8000/api/user/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};
export const loginUser = async (data: UserLogin) => {
  const res = await fetch('http://localhost:8000/api/user/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};
