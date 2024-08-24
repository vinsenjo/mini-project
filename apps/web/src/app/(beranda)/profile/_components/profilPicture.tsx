import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import { Avatar } from './userAvatar';
export default function ProfilePicture() {
  const src =
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';
  return (
    <div className="bg-black text-white flex flex-col justify-center w-screen py-5">
      <div className='flex flex-col justify-center items-center'>
        <Avatar src={src} alt="avatar" />
        <h1 className='text-2xl lg:text-3xl mt-2'>Username</h1>
        <h2>Username@gmail.com</h2>
      </div>
    </div>
  );
}
