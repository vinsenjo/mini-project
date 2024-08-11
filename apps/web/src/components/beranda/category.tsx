import { FaMusic  } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaFilm } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";


export default function Category() {
    return (
        <section className="bg-white">
            <div className="py-9  flex flex-wrap justify-center lg:flex-row gap-7 lg:pl-19 lg:mx-8 text-black font-semibold font-serif  ">
                <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px]  hover:scale-110 duration-500"><FaMusic className="text-[#32BC9B] w-24"/>Music</button>
                <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110 duration-500"><IoGameController  className="text-[#32BC9B] w-24  " />Game</button>
                <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110 duration-500"><FaFilm   className="text-[#32BC9B] w-24 " />Anime</button>
                <button className="btn btn-outline border-2 px-5 py-2 rounded-xl border-[#BCBCBC] flex items-center gap-2 w-[160px] lg:w-[250px] lg:h-[70px] hover:scale-110 duration-500"><MdOutlineFestival  className="text-[#32BC9B] w-24 " />Festival</button>
            </div>
        </section>
    )
}