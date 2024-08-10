import Link from "next/link"
import Card from "./card"

export default function Acara() {
    return (
        <section className="bg-[#e1e1e1] min-h-screen px-7 pt-4">
            
            {/* location */}
            <div className="px-10">
            <select className="select select-accent w-full max-w-xs h-10 ">
                <option disabled selected>City</option>
                <option>Bandung</option>
                <option>Surabaya</option>
                <option>Bali</option>
            </select>
            </div>

            {/* waktu */}
            {/* <div className=" lg:py-5 lg:px-20  top-1 flex flex-row font-sans items-center gap-2 lg:gap-7 ">
                <p className="text-black  hover:text-[#FF7B4F] hover:underline hover:font-bold">All</p>
                <p className="text-black hover:text-[#FF7B4F] hover:underline hover:font-bold">Today</p>
                <p className="text-black hover:text-[#FF7B4F] hover:underline hover:font-bold">Tomorrow</p>
                <p className="text-black hover:text-[#FF7B4F] hover:underline hover:font-bold">This Week</p>
                <p className="text-black hover:text-[#FF7B4F] hover:underline hover:font-bold">Next Week</p>
                <p className="text-black hover:text-[#FF7B4F] hover:underline hover:font-bold">This Month</p>
            </div> */}
            <Card/>
        </section>
    )
}