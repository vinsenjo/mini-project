import Navbar from '@/components/navbar/Navbar';
import EventList from './_components/eventList';
import DashboardHead from './_components/header';

export default function Dashboard() {
  return (
    <div>
        <Navbar/>
      <DashboardHead />
      <EventList/>
    </div>
  );
}
