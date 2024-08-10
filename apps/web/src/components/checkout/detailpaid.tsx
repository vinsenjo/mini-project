export default function DetailPiad() {
    return (
        <section className="pt-5 px-5">
            <p className="border-2 bg-[#f6916f] font-semibold lg:w-full w-[290px]  text-xs sm:text-base px-7">order details</p>
            <div className="grid grid-cols-2 grid-rows-3 ">
                <p>Nama</p>
                <p >Nani Khodijah</p>
                <p>Qty</p>
                <p >6</p>
                <p>Disc</p>
                <p >5%</p>
                <p className="font-semibold">Total</p>
                <p className="font-semibold" >IDR 299.512</p>
            </div>
        </section>
    )
}