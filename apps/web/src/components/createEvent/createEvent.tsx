import ModalFree from "../modal/modalfree";
import ModalPaid from "../modal/modalpaid";

export default function CreateEvent() {
    return (
        <section className="min-h-screen  flex justify-center items-center bg-[#e1e1e1]">
            <div className="bg-white rounded-xl mx-auto lg:w-[700px]  h-full  flex flex-col p-8 ">
                <h1 className="font-extrabold text-6xl flex justify-center font-serif ">TicketList</h1>
                <p className="font-semibold text-1xl flex justify-center pt-3">Create your event on TicketList🎉🎉</p>
                <div className="flex justify-center gap-32 pt-11">

                    <ModalPaid />
                   <ModalFree />
                </div>
            </div>
        </section>
    )
}