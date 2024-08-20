import { FaMusic } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { FaFilm } from 'react-icons/fa';
import { MdOutlineSportsBasketball } from 'react-icons/md';

export default function Category() {
  return (
    <section className="bg-white">
      <div className="py-9  flex flex-wrap justify-center lg:flex-row gap-10 lg:justify-around  lg:mx-20 text-black font-semibold font-serif  ">
        <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px]  hover:scale-110  text-black duration-500 hover:bg-white lg:scale-110 lg:text-xl lg:hover:scale-125">
          <FaMusic size={17} className="text-[#32BC9B]  lg:size-5 " />
          <p className="">Music</p>
        </button>
        <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110  text-black duration-500 hover:bg-white lg:scale-110 lg:text-xl lg:hover:scale-125">
          <IoGameController size={17} className="text-[#32BC9B] lg:size-5  " />
          Game
        </button>
        <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110  text-black duration-500 hover:bg-white lg:scale-110 lg:text-xl lg:hover:scale-125">
          <FaFilm size={17} className="text-[#32BC9B] lg:size-5  " />
          Anime
        </button>
        <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110  text-black duration-500 hover:bg-white lg:scale-110 lg:text-xl lg:hover:scale-125">
          <MdOutlineSportsBasketball size={17} className="text-[#32BC9B] lg:size-5" />
          Sport
        </button>
      </div>
    </section>
  );
}
