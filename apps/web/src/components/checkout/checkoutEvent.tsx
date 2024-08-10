import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import DetailPiad from "./detailpaid";
import Detailchek from "./detailchek";
import Pay from "./pay";


export default function CheckoutEvent() {
    return (
        <section className="min-h-screen  flex justify-center items-center bg-[#e1e1e1]">
            <div className="bg-white rounded-xl mx-auto lg:w-[400px]  h-[450px] overflow-auto flex flex-col">
                <div className="flex pt-3 px-4 text-2xl font-serif gap-12 ">
                <Link href="/detail" passHref ><BsArrowLeft /></Link>
                    <p>confirm payment</p>
                </div>
                <Detailchek/>
                <DetailPiad/>
                <Pay />
                
            </div>

        </section>
    )
}