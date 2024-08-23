import { IEvent } from '@/types/event';
import { getCookie } from './server';

export const getEvent = async () => {
  const token = await getCookie('token');
  interface Response {
    status: string;
    event: IEvent[];
    eventAll: any
  }
  const res = await fetch('http://localhost:8000/api/event/', {
    // headers: {
    //   Authorization: `Bearer ${token?.value}`,
    // },
    next: { revalidate: 60, tags: ['event'] },
    // cache: 'no-cache',
  });
  const response: Response = await res.json();
  return { result: response, ok: res.ok };
};
