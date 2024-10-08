import { getEvent } from '@/libs/actions/event';
import Link from 'next/link';
import Pagination from './pagination';
import { navigate } from '@/libs/actions/server';

interface IData {
  img: string;
  judul: string;
  tanggal: string;
  tempat: string;
  harga: number;
}
export default async function Card() {
  const events = await getEvent();
  const data = events.result.event;


  const total = Math.ceil(+events.result.eventAll.length / 8);

  // console.log(total);
  return (
    <section className="bg-[#e1e1e1] py-2 flex flex-col items-center justify-center ">
      <div className="grid w-[90%] grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 justify-center items-center bg-[#e1e1e1] lg:flex-row lg:flex-wrap flex-col gap-4 lg-gap-6 lg:py-6   text-black">
        {data.map((item, key) => (
          <div
            key={key}

            className="card card-compact  bg-white w-full h-[500px] shadow-xl rounded-2xl"

          >
            <figure>
              <img
                src={item.image}
                alt="Music"
                className="rounded-top-2xl w-[100%] h-[260px] rounded-t-2xl hover:scale-110 duration-300"
              />
            </figure>
            <div className="card-body px-5 pt-3 pb-8">
              <h2 className="card-title font-extrabold">{item.name}</h2>
              <p>{item.date}</p>
              <p className="text-slate-400">{item.location}</p>
              <p className="text-red-700">{`IDR ${item.price.toLocaleString()}`}</p>
              <div className="card-actions flex justify-center pt-3">
                <Link
                  className="btn btn-primary border-2 font-semibold border-slate-500 rounded-full bg-white hover:border-[#FF7B4F] hover:bg-[#FF7B4F] hover:text-white h-9 w-full"
                  href={`/detail/${item.id}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Pagination page="" totalPages={total} hasNextPage={true} />
      </div>
    </section>
  );
}
