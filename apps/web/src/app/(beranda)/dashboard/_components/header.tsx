import MiniBox from './miniBox';
import { FaCalendarCheck } from 'react-icons/fa';

export default function DashboardHead() {
  return (
    <div className="flex p-3 gap-3">
      <MiniBox svg={<FaCalendarCheck />} number={20} text="Event Created" />
      <MiniBox svg={<FaCalendarCheck />} number={20} text="Ticket Sold" />

      <MiniBox svg={<FaCalendarCheck />} number={20} text="Total Revenue" />
    </div>
  );
}
