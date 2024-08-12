import { IoWallet } from "react-icons/io5";

export default function Pay() {
    return (
        <section className="pt-4 px-6">
            <h1 className="font-semibold">Pay With</h1>
            <div className="flex justify-center">
                <input type="radio" name="" id=""  defaultChecked/>
                <button className="rounded-xs bg-slate-200 flex w-[250px] h-7"> Go Pay</button>
                <IoWallet className=" flex justify-end bg-slate-200 h-7" />
            </div>
            <div className=" flex justify-center pt-10">
                <button className='border-2 font-semibold rounded-lg border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-[350px] '>Place Order</button>
            </div>
        </section>
    )
}