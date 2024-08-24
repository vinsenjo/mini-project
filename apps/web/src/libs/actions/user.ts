import { EoLogin, ISignUp, UserLogin, UserState } from '@/types/user';
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
