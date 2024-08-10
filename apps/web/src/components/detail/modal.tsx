'use client'
import Image from "next/image";
import Confirm from "./confirm";
import { useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(false)


    function hideModal() {
        setModal(true);

    }
    return (
        <section className="overflow-hidden">
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box lg:w-[390px] w-[300px] h-[370px] py-2 px-2 ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghostC absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex">
                        <Image className=""
                            src={'/img/sy2.jpeg'}
                            alt="pembayran"
                            width={100} 
                            height={200} />
                        <div className="gap-3 px-3 ">
                            <h3 className="font-bold text-lg">Synchronize Fest</h3>
                            <p className="text-slate-600">Lapangan Persuasif Bandung </p>
                            <p className="text-slate-600">14 December 2024</p>
                            <p className="text-slate-600">14:00 - 22:00 WIB</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <p>seats available = 50 pax</p>
                        <p className="border-2 bg-[#f6916f] font-semibold lg:w-full w-[290px]  text-xs sm:text-base ">you have logged in as :<span className="font-normal">Nani Khodijah</span></p>
                        <Confirm />
                    </div>
                </div>
            </dialog>
        </section>
    )
}