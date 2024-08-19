'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const createCookie = (key: string, value: string) => {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set(key, value, { expires: Date.now() + oneDay });
};

export const getCookie = (key: string) => {
  return cookies().get(key);
};



export const deleteCookie = (key: string) => {
  return cookies().delete(key);
};

export const navigate = (url: string) => {
  redirect(url);
};
