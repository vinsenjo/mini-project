import { Header } from '../Header';
import Hamburger from './Hamburger';
import LoginRegister from './LoginRegister';
import ProfilePict from './profilePic';

export default function Navbar() {
  return (
    <div className="flex">
      <Header />
      <ProfilePict/>
      <LoginRegister />
      
    </div>
  );
}
