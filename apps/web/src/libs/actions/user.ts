import { EoLogin, ISignUp, UserLogin, UserState } from '@/types/user';
import { getCookie } from './server';

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
export const setTransaction = async (data: any, token: string) => {
  const res = await fetch('http://localhost:8000/api/transaction', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data: EoLogin) => {
  const res = await fetch('http://localhost:8000/api/user/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const verifyUser = async (token: string) => {
  const res = await fetch('http://localhost:8000/api/user/verify', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
  });
  const response = await res.json();

  return { result: response, ok: res.ok };
};

export const getUser = async () => {
  const token = await getCookie('token');
  const res = await fetch('http://localhost:8000/api/user/profile', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token?.value}`,
      cache: 'no-chache',
    },
    method: 'GET',
  });
  const response = await res.json();
  return { result: response, ok: res.ok };
};
