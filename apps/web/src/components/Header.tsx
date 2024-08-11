'use client'
import Link from "next/link";
import ModalLogin from "./modal/modalLogin";
import { useState } from "react";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleModalRegister = () => {
    setOpenModalRegister(!openModalRegister)
  }

  return (
    <section>
      <nav className=" bg-black sm:px-20 px-3 lg:py-5 py-2 top-1 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-mono font-extrabold text-3xl hover:scale-125 duration-500"><Link href="/" passHref >X-ev</Link></h1>
        <div className="flex text-white  lg:gap-10 gap-5 ">
          <input type="search" placeholder="Search Event" className="md:w-[500px] w-[100px] h-[30px] focus:outline-none text-black " />

          <div className="text-white flex gap-3">
            <p className="cursor-pointer" onClick={handleModal}>Login</p>
            <p className="cursor-pointer" onClick={handleModalRegister}>register</p>
          </div>

          <ModalLogin isOpen={openModal} onClose={handleModal}>
            <div className="absolute top-20 right-16 w-36 h-20 bg-white text-black rounded-lg ">
              <h1 className="font-bold text-xl flex justify-center pt-2">X-ev</h1>
              <div className="flex justify-between px-6 p-2">
                <p className="hover:text-[#FF7B4F] hover:scale-110 duration-500"><Link href={"/login"}>User</Link></p>
                <p className="hover:text-[#FF7B4F] hover:scale-110 duration-500">EO</p>
              </div>
            </div>
          </ModalLogin>

          <ModalLogin isOpen={openModalRegister} onClose={handleModalRegister}>
            <div className="absolute top-20 right-16 w-36 h-20 bg-white text-black rounded-lg ">
              <h1 className="font-bold text-xl flex justify-center pt-2">X-ev</h1>
              <div className="flex justify-between px-6 p-2">
                <p className="hover:text-[#FF7B4F] hover:scale-110 duration-500"><Link href={"/register"}>User</Link></p>
                <p className="hover:text-[#FF7B4F] hover:scale-110 duration-500">EO</p>
              </div>
            </div>
          </ModalLogin>
        </div>
      </nav>
    </section>
  )
};