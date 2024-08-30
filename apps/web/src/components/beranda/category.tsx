import { FaMusic } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { FaFilm } from 'react-icons/fa';
import { MdOutlineSportsBasketball } from 'react-icons/md';

interface ICategory {
  icon: any;
  judul: string;
}

export default function Category() {
  const data: ICategory[] = [
    { icon: <FaMusic />, judul: 'music' },
    { icon: <IoGameController />, judul: 'Game' },
    { icon: <FaFilm />, judul: 'Anime' },
    { icon: <MdOutlineSportsBasketball />, judul: 'Sport' },
  ]
  return (
    <section className="bg-white p-10">
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {data.map((item, key) => (
          <div key={key} className='flex justify-center'>
            <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] text-black">
              <p>{item.icon}</p>
              <p>{item.judul}</p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

