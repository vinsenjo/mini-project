import Navbar from '@/components/navbar/Navbar';
import ProfilePicture from './_components/profilPicture';
import { Footer } from '@/components/Footer';
import UserInfo from './_components/userInfo';
import UserPoint from './_components/point';

export default function Profile() {
  return (
    <div>
      <Navbar />
      <ProfilePicture />
      <UserPoint />
      <UserInfo />
      <Footer />
    </div>
  );
}
