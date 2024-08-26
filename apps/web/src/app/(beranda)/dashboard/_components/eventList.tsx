import { getEoEvent, getEvent } from '@/libs/actions/event';
import { IEvent } from '@/types/event';
import Image from 'next/image';
interface IProps {
  name: string;
  location: string;
  image: string;
}

export default async function EventList() {
  const events = await getEoEvent();
  const data: IEvent[] = events.data;
  // console.log(data);

  return (
    <div className="bg-white text-black p-2 rounded-xl mx-3 ">
      <h1 className="text-3xl font-bold text-black">Your Event List</h1>
      <div className='grid grid-cols-2 gap-2'>
        {data.map((item, key) => (
          <div
            key={key}
            className="  flex border-2 gap-3 border-black p-2 rounded-xl my-2"
          >
            <img
              src={item.image}
              height={20}
              width={20}
              alt="event image"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">{item.name}</h3>
              <h2>{item.location}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
