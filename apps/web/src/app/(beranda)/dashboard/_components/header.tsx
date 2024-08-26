import { getEoEvent, getEvent } from '@/libs/actions/event';
import MiniBox from './miniBox';
import { FaCalendarCheck } from 'react-icons/fa';
import Link from 'next/link';

export default async function DashboardHead() {
  const events = await getEoEvent();
  const data = events.data;
  return (
    <div className="flex justify-between pr-10 p-3 gap-3 ">
      <div className='flex gap-3'>
        <MiniBox
          svg={<FaCalendarCheck />}
          number={data.length}
          text="Event Created"
        />
        <MiniBox svg={<FaCalendarCheck />} number={20} text="Ticket Sold" />

        <MiniBox svg={<FaCalendarCheck />} number={20} text="Total Revenue" />
      </div>

      <Link className='flex font-black text-3xl bg-[#32bc9b] py-2 items-center text-center px-4 text-black rounded-xl hover:text-white hover:bg-black hover:scale-110 duration-300  ' href={'/createEvent'}>Create Event</Link>
    </div>
  );
}
