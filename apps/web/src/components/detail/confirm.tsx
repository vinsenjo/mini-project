import Link from "next/link";
import { useState } from "react";

export default function Confirm() {
 const [count, setCount] = useState(0)

    return (
        <section className='pt-5 '>
            <div className="flex justify-center gap-40">
                <p>Price</p>
                <p >IDR 299.512</p>
            </div>
            <div className="flex justify-center gap-56">
                <p>Qty</p>
                <p >- () +</p>
            </div>
            <div className="flex justify-center gap-10">
                <p>Point</p>
              <input type="number" name="" id=""placeholder="code vocher" className="focus:outline-none bg-slate-200" />
            </div>

                <div className="flex justify-center pt-7 pb-7">
                    <button className='border-2 font-semibold rounded-lg border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[350px] '><Link href="/checkout" passHref >Continue</Link></button>
                </div>
        </section>
    )
}