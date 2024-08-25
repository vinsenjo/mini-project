import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import { Avatar } from './userAvatar';
import { getUser } from '@/libs/actions/user';
import { getCookie } from '@/libs/actions/server';
import ImageInput from './imageInput';


export default async function ProfilePicture() {
  const data = await getUser();
  const user = data.result.data
  

  const src =
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';
  return (
    <div className="bg-black text-white flex flex-col justify-center  py-5">
      <div className="flex flex-col justify-center items-center">
        <Avatar src={src} alt="avatar" />
        <h1 className="text-2xl lg:text-3xl mt-2">{user.username}</h1>
        <h2>{user.email}</h2>

      </div>
    </div>
  );
}
