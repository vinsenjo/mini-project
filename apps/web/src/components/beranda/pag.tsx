// // /pages/index.tsx
// import { GetServerSideProps } from 'next';
// import Pagination from './pagination';


// // type Event = {
// //   id: number;
// //   name: string;
// //   date: string;
// //   price: number;
// //   seats: number;
// //   image: string | null;
// // };

// type Props = {
//   events: Event[];
//   totalPages: number;
//   currentPage: number;
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
// };

// const Pag: React.FC<Props> = ({ events, totalPages, currentPage, hasNextPage, hasPrevPage }) => {
//   return (
//     <div>
//       {/* <h1>Events</h1>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <h2>{event.name}</h2>
//             <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//             <p>Price: ${event.price}</p>
//             <img src={event.image ?? '/default-image.png'} alt={event.name} />
//           </li>
//         ))}
//       </ul> */}
//       <Pagination
//         page={currentPage.toString()}
//         totalPages={totalPages}
//         hasPrevPage={hasPrevPage}
//         hasNextPage={hasNextPage}
//       />
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const page = context.query.page ? parseInt(context.query.page as string, 10) : 1;

//   const response = await fetch(`http://localhost:3000/api/events?page=${page}`);
//   const data = await response.json();

//   return {
//     props: {
//       events: data.event || [],
//       totalPages: data.totalPages || 1,
//       currentPage: page,
//       hasNextPage: page < data.totalPages,
//       hasPrevPage: page > 1,
//     },
//   };
// };

// export default Pag 
// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Event } from '@prisma/client'
// import axios from 'axios';
// import Link from 'next/link';



// interface IData {
//     img: string;
//     judul: string;
//     tanggal: string;
//     tempat: string;
//     harga: number;
// }

// const Event = ({ searchParams }: { searchParams: { page: string } }) => {
//     const [event, setEvent] = useState<Event[]>([]);
//     const [page, setPage] = useState('1');
//     const [totalPages, setTotalPages] = useState(1);
//     const [hasNextPage, setHasNextPage] = useState(false);

//     useEffect(() => {
//         if (searchParams.page) {
//             fatchEvent(searchParams.page)
//         }
//         else {
//             fatchEvent('1')
//         }

//     }, [searchParams])

//     const fatchEvent = async (pageNumber: string) => {
//         const respone = await axios.get('http://localhost:8000/api/event/', {
//             params: {
//                 page: pageNumber
//             }
//         });
//         if (respone.data) {
//             setEvent(respone.data.event);
//             setPage(pageNumber);
//             setTotalPages(respone.data.metadata.totalPages);
//             setHasNextPage(respone.data.metadata.hasNextPage);
//         }
//     }


//     return (
//         <section className="bg-[#e1e1e1] py-2 flex flex-col items-center justify-center ">
//             <div className="grid w-[90%] grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 justify-center items-center bg-[#e1e1e1] lg:flex-row lg:flex-wrap flex-col gap-4 lg-gap-6 lg:py-6   text-black">
//                 {data.map((item, key) => (
//                     <div
//                         key={key}

//                         // className="card card-compact  bg-white w-[350px] shadow-xl rounded-2xl"
//                         className="card card-compact  bg-white w-full h-[500px] shadow-xl rounded-2xl"
//                     >
//                         <figure>
//                             <img
//                                 src={item.image}
//                                 alt="Music"
//                                 className="rounded-top-2xl w-[100%] h-[260px] rounded-t-2xl hover:scale-110 duration-300"
//                             />
//                         </figure>
//                         <div className="card-body px-5 pt-3 pb-8">
//                             <h2 className="card-title font-extrabold">{item.name}</h2>
//                             <p>{item.date}</p>
//                             <p className="text-slate-400">{item.location}</p>
//                             <p className="text-red-700">{`IDR ${item.price.toLocaleString()}`}</p>
//                             <div className="card-actions flex justify-center pt-3">
//                                 <button className="btn btn-primary border-2 font-semibold border-slate-500 rounded-full bg-white hover:border-[#FF7B4F] hover:bg-[#FF7B4F] hover:text-white h-9 w-full">
//                                     <Link href={`/detail/${item.id}`}>Detail</Link>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {/* <Pagination
//                 page=""
//                 totalPages={total}
//                 hasPrevPage={false}
//                 hasNextPage={true}
//               /> */}
//             </div>

//         </section>
//     );
// }


// export default Event
