import { getEoEvent, getEvent } from '@/libs/actions/event';
import MiniBox from './miniBox';
import { FaCalendarCheck } from 'react-icons/fa';

export default async function DashboardHead() {
  const events = await getEoEvent();
  const data = events.data;
  return (
    <div className="flex justify-center p-3 gap-3 ">
      <MiniBox
        svg={<FaCalendarCheck />}
        number={data.length}
        text="Event Created"
      />
      <MiniBox svg={<FaCalendarCheck />} number={20} text="Ticket Sold" />

      <MiniBox svg={<FaCalendarCheck />} number={20} text="Total Revenue" />
    </div>
  );
}
