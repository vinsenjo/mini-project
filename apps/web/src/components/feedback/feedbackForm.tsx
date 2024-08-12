import Image from "next/image";
import Review from "./review";
import Submit from "./submit";


export default function Feedback() {
    return (
        < section className="min-h-screen  flex justify-center items-center bg-[#e1e1e1]">
            <div className="bg-white rounded-xl mx-auto lg:w-[700px]  h-full overflow-auto flex flex-col p-8 ">
                <div className="flex justify-center">
                    <Image className="flex justify-center"
                        src={'/img/feedback.jpg'}
                        alt="feedback"
                        height={80}
                        width={100}
                    />
                </div>
                <h1 className="font-bold text-3xl flex justify-center pt-2">Product Customer Feedback Form </h1>
                <p className=" pt-1">Thank you for taking time to provide feedback. We appreciate hearing from you and will review your comments carefully.</p>
                <div className="py-10">
                    <hr className="h-0.5 flex-grow bg-slate-400 " />
                </div>
                <Review/>
                <Submit/>
                
            </div>
        </section>
    )
}