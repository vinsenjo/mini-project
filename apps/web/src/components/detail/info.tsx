'use client'
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";



export default function InfoEvent() {


    return (
        <section className="bg-[#e1e1e1]">
            <Image className="lg:h-full h-[250px] w-full"
                src='/img/Synchronize Fest.jpeg'
                alt="Synchronize Fest"
                width={420}
                height={40} />

            {/* description */}
            <div className="flex lg:flex-row flex-col lg:justify-evenly ">
                <div className=" px-6 py-6">
                    <h1 className="font-extrabold text-2xl ">Synchronize Fest</h1>
                    <div className="flex gap-2 text-slate-600 py-2"><FaCalendarAlt />14 December 2024</div>
                    <div className="flex gap-2 text-slate-600"><GoClockFill />14:00 - 22:00 WIB</div>
                    <div className="flex gap-2 text-slate-600"><FaLocationDot />Lapangan Persuasif Bandung </div>
                    <div className="w-[350px] py-2">
                        <p>Get ready to experience unparalleled musical euphoria at Synchronize Fest 2024! Join thousands of other music enthusiasts at Indonesias biggest and most anticipated music festival. Enjoy an unforgettable experience with spectacular performances by top local and international artists on the main stage.</p>
                        <p className="py-2">Dont miss out on the chance to be part of this unforgettable festival experience. Secure your tickets now and get ready for Synchronize Fest 2024—where music and fun come together!</p>
                    </div>
                </div>

                {/* ticket */}
                <div className="lg:pt-24 lg:px-28 pt-5 px-4 pb-12 ">
                    <div className="card bg-white w-96 shadow-xl h-16 rounded-lg">       
                            <div className="card-actions flex justify-center pt-2">
                                <button className="btn btn-primary border-2 font-semibold rounded-sm border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[300px] " onClick={() => (document.getElementById('my_modal_3') as HTMLFormElement).showModal() }>See Tickets</button>   
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}