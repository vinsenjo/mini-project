import { Header } from '../Header';
import LoginRegister from './LoginRegister';
import ProfilePict from './profilePic';

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Header />
      <ProfilePict />
    </div>
  );
}
