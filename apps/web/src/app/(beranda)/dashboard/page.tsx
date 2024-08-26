import Navbar from '@/components/navbar/Navbar';
import EventList from './_components/eventList';
import DashboardHead from './_components/header';
import CardLineChart from './_components/chart';

export default function Dashboard() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="p-5 px-10">
        <DashboardHead />
        <EventList />
        <CardLineChart/>
      </div>
    </div>
  );
}
