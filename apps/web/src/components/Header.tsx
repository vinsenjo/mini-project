
'use client';
import Link from 'next/link';
import { deleteCookie, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import Hamburger from './navbar/Hamburger';
import { event } from 'cypress/types/jquery';
import { FaSearch } from "react-icons/fa";
import { object } from 'yup';


export const Header = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const [isAuthenticated, setIsAuthenticated] = useState('');



  useEffect(() => {
    const authToken = Cookies.get('token');
    if (authToken) setIsAuthenticated(authToken!);
  }, []);

  const logOut = () => {
    try {
      if (!isAuthenticated) throw 'already logout';
      deleteCookie('token');
      setIsAuthenticated('');
      toast.success('success logout');
      navigate('/');
    } catch (error) {
      toast.error('error');
    }
  }
  const searchRef = useRef<HTMLInputElement>(null);

  // const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   if (searchRef.current) {
  //     event.preventDefault();
  //     alert(searchRef.current.value);
  //   }
  // }
  const handleSearch =async (event: any, setFieldValue: any) => {
    const search = event.target.files[0]
    if (searchRef) {
        setFieldValue('searchRef', search)
    }
}
  const formEl = document.querySelector('.form');
  formEl?.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData();
    const data = Object.fromEntries(formData);
    console.log(data);

  })

  return (

    < section className="z-30 w-full " >
      <nav className=" bg-white sm:px-5 px-3 lg:justify-between py-2 top-1 flex flex-row  items-center  ">
        <Link href="/" passHref>
          <h1 className="text-2xl text-black font-bold">Ticketist</h1>
        </Link>
        {/* search */}
        <div className="text-white  items-center flex gap-2">
          <div className='relative'>
            <form className='form'>
              <input
                placeholder="Search....."
                className="px-3 rounded-full md:w-[600px] w-[230px] mx-2  bg-white border-black placeholder:text-black border-2  lg:mr-10 text-black h-[40px] focus:outline-none"
                ref={searchRef}
              />
              <button
                className="absolute end-14 top-3 z-50"
                >
                <FaSearch className="text-black" />
              </button>
            </form>

          </div>



          {/* avatar */}
          <div className={`${isAuthenticated ? 'lg:flex' : 'hidden'} hidden`}>
            <div className={`dropdown dropdown-hover   dropdown-end`}>
              <div className={`avatar`}>
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
              >
                <li>
                  <a onClick={logOut}>Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Hamburger /> */}
      </nav>
    </section >

  )
};
