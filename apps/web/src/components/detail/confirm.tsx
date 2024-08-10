import Link from "next/link";
import { useState } from "react";
import { SlMinus } from "react-icons/sl";
import { BsPlusCircle } from "react-icons/bs";


export default function Confirm() {
    const [count, setCount] = useState(0)
    function mincounter() {
        if (count > 0) setCount(count - 1)
    }

    return (
        <section className='pt-5 px-5 '>
            <div className="grid grid-cols-2 grid-rows-3">

                <p>Price</p>
                <p className="text-end" >IDR 299.512</p>
                <p >Qty</p>

                <div className="flex justify-end gap-4">
                    <button onClick={mincounter}><SlMinus /></button>
                    <h1>{count}</h1>
                    <button className="" onClick={() => setCount(count + 1)}><BsPlusCircle /></button>
                </div>

                <p>Point</p>
                <input type="number" name="" id="" placeholder="code vocher" className="focus:outline-none bg-slate-200" />

            </div>

            <div className="flex justify-center pt-7 pb-7">
                <button className='border-2 font-semibold rounded-lg border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[350px] '><Link href="/checkout" passHref >Continue</Link></button>
            </div>
        </section>
    )
}