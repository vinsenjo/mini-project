import { EoLogin, ISignUp, ISignUpEo } from '@/types/user';

export const loginCreator = async (data: EoLogin) => {
  const res = await fetch('http://localhost:8000/api/eo/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const registerEo = async (data: ISignUpEo) => {
  const res = await fetch('http://localhost:8000/api/eo/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};