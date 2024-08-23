// interface IEvent {
//   id: number;
//   name: 'mobil';
//   description: 'masuk';
//   price: 1000;
//   date: '2024-12-12T00:00:00.000Z';
//   location: 'arhanud';
//   image: 'asd';
//   seats: 100;
//   ticketType: 'free';
//   createdAt: '2024-08-18T12:02:46.966Z';
//   updatedAt: '2024-12-12T00:00:00.000Z';
//   category: 'anime';
//   eOId: 1;
// }

export interface IEvent {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  date: string;
  seats: number;
  location: string;
  ticketType: string;
  category: string;
  eOId: number;
}
