export default function DetailPiad() {
    return (
        <section className="pt-3">
            <p className="border-2 bg-[#f6916f] font-semibold lg:w-full w-[290px]  text-xs sm:text-base px-7">order details</p>
            <div>
                <div className="flex justify-center ">
                    <p>Nama</p>
                    <p >Nani Khodijah</p>
                </div>
                <div className="flex justify-center">
                    <p>Qty</p>
                    <p >6</p>
                </div>
                <div className="flex justify-center ">
                    <p>Disc</p>
                    <p >5%</p>
                </div>
                <div className="flex justify-center font-semibold">
                    <p>Total</p>
                    <p >IDR 299.512</p>
                </div>
            </div>
        </section>
    )
}