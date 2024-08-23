import Image from 'next/image';
interface IProps {
  name: string;
  location: string;
  image: string;
}

export default function EventList() {
  return (
    <div className="bg-white text-black p-2 max-w-[30%] rounded-xl mx-3" >
      <h1 className='text-3xl font-bold text-black'>Your Event List</h1>
      <div className=" flex border-2 gap-3 border-black p-2 rounded-xl my-2">
        <Image src="/img/so71.jpeg" height={20} width={20} alt="event image" className='w-[50px] h-[50px] rounded-full' />
        <div className="flex flex-col">
          <h3>Cosplay Event</h3>
          <h2>2024-10-11</h2>
        </div>
      </div>
      <div className=" flex border-2 gap-3 border-black p-2 rounded-xl my-2">
        <Image src="/img/so71.jpeg" height={20} width={20} alt="event image" className='w-[50px] h-[50px] rounded-full' />
        <div className="flex flex-col">
          <h3>Cosplay Event</h3>
          <h2>2024-10-11</h2>
        </div>
      </div>
    </div>
  );
}
