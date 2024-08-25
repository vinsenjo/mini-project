import { IEvent } from '@/types/event';
import { getCookie } from './server';

import { validationSchema } from '@/components/modal/modalpaid';
interface Response {
  status: string;
  event: IEvent[];
  eventAll: any;
}
export const getEvent = async () => {
  const token = await getCookie('token');
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

export const createEventFree = async (data: validationSchema) => {
  const token = await getCookie('token');
  const formData = new FormData();
  formData.append('image', (data.image as File) || null);
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('date', `${data.date}T00:00:00.000Z`);
  formData.append('seats', data.seats);
  formData.append('location', data.location);
  formData.append('ticketTypes', 'free');
  formData.append('category', data.category.toLowerCase());
  const res = await fetch('http://localhost:8000/api/event/', {
    method: 'POST',
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: formData,
  });
  // console.log(res);
  console.log(res);

  if (!res.ok) throw 'Failed to create event FREE';

  return res.json();
};

// export const getEventById = async (params: number) => {
//   const res = await fetch(`http://localhost:8000/api/event/${params}`, {
//     headers: {
//       cache: 'no-chache',
//     },

//     // next: { revalidate: 60, tags: ['eoEvent'] },
//   });
//   return res.json();
// };
