'use client';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { FaLocationDot } from 'react-icons/fa6';
import { useParams } from 'next/navigation';
// import { getEventById } from '@/libs/actions/event';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IEvent } from '@/types/event';
import Link from 'next/link';

export default function InfoEvent() {
  const [data, setData] = useState<IEvent>();
  const params = useParams();
  const id = +params.detailId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/api/event/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const date = new Date(data?.date as string);
  const tanggal = date.toLocaleDateString();

  return (
    <section className="bg-[#e1e1e1] text-black flex-col lg:flex-row flex">
      <img
        className="lg:h-full pt-5 lg:py-10 px-5  lg:w-[50%]"
        src={data?.image}
        alt="Synchronize Fest"
        width={420}
        height={40}
      />

      {/* description */}
      <div className="flex flex-col lg:justify-evenly ">
        <div className=" px-6 py-6">
          <h1 className="font-extrabold text-2xl text-black">{data?.name}</h1>
          <div className="flex gap-2 text-slate-600 py-2">
            <FaCalendarAlt />
            {tanggal}
          </div>
          <div className="flex gap-2 text-slate-600">
            <GoClockFill />
            14:00 - 22:00 WIB
          </div>
          <div className="flex gap-2 text-slate-600">
            <FaLocationDot />
            {data?.location}
          </div>
          <div className=" py-2">
            <p>{data?.description}</p>
          </div>
        </div>

        {/* ticket */}
        <div className=" pt-3 px-4 pb-12 ">
          <div className="card bg-white  lg:w-96 shadow-xl h-16 rounded-lg">
            <div className="card-actions flex justify-center pt-2">
              {/* <button
                className="btn btn-primary border-2 font-semibold rounded-sm border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[300px] "
                // onClick={() =>
                //   (
                //     document.getElementById('my_modal_3') as HTMLFormElement
                //   ).showModal()
                // }
              >
              </button> */}
              <Link
                className="btn btn-primary border-2 font-semibold rounded-sm border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[300px] "
                href={`/checkout/${data?.id}`}
              >
                See Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
