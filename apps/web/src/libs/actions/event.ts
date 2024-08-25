import { IEvent } from '@/types/event';
import { getCookie } from './server';
import { useEffect } from 'react';

interface Response {
  status: string;
  event: IEvent[];
  eventAll: any;
}

export const getEvent = async () => {
  const token = await getCookie('token');
  const res = await fetch(`http://localhost:8000/api/event/`, {
    // headers: {
    //   Authorization: `Bearer ${token?.value}`,
    // },
    next: { revalidate: 60, tags: ['event'] },
    // cache: 'no-cache',
  });

  const response: Response = await res.json();
  return { result: response, ok: res.ok };

};
export const getEventQuery = async (term: string) => {
  const token = await getCookie('token');
  const res = await fetch(`http://localhost:8000/api/event/?query=${term}`, {

    next: { revalidate: 60, tags: ['event'] },
  });
  const response: Response = await res.json();
  return { result: response, ok: res.ok };
};


export const getEoEvent = async () => {
  const token = await getCookie('token');
  const res = await fetch('http://localhost:8000/api/event/eo', {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      cache: 'no-chache',
    },

    // next: { revalidate: 60, tags: ['eoEvent'] },
  });
  return res.json();
};
