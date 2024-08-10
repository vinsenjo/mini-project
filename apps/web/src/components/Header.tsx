'use client'
import Link from "next/link";

export const Header = () => {
  return (
    <section>
      <nav className=" bg-black sm:px-20 px-3 lg:py-5 py-2 top-1 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-mono font-extrabold text-3xl hover:scale-105 duration-150"><Link href="/" passHref >X-ev</Link></h1>
        <div className="flex text-white  lg:gap-10 gap-5 ">
          <input type="search" placeholder="Search Event" className="md:w-[500px] w-[100px] h-[30px] focus:outline-none text-black " />
          <div>
            <button className="btn" onClick={() => (document.getElementById('my_modal_2') as HTMLFormElement).showModal()}>Login</button>
            <dialog id="my_modal_2" className="modal absolute left-[900px] top-[-230px] w-[200px] rounded-lg p-4 bg-white">
              <h3 className="font-bold text-lg">X-ev</h3>
              <div className="flex justify-center gap-8">
                <button className=""> <Link href="/login" passHref >User</Link></button>
                <button>EO</button>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

          <div>
            <button className="btn" onClick={() => (document.getElementById('my_modal_1') as HTMLFormElement).showModal()}>Sign Up</button>
            <dialog id="my_modal_1" className="modal absolute left-[900px] top-[-230px] w-[200px] rounded-lg p-4 bg-white">
              <h3 className="font-bold text-lg">X-ev</h3>
              <div className="flex justify-center gap-8">
                <button className=""> <Link href="/register" passHref >User</Link></button>
                <button>EO</button>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </nav>
    </section>
  )
};
