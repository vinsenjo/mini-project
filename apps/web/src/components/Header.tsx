'use client';
import Link from 'next/link';
import { deleteCookie, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import cookie from 'cookie';
import { getCookie } from 'cookies-next';
import 'react-toastify/dist/ReactToastify.css';
import Hamburger from './navbar/Hamburger';

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
  };
  return (
    <section className="z-30 w-full ">
      <nav className=" bg-white sm:px-5 px-3 lg:justify-between py-2 top-1 flex flex-row  items-center  ">
        <Link href="/" passHref>
          <h1 className="text-2xl text-black font-bold">Ticketist</h1>
        </Link>
        <div className="text-white  items-center flex gap-2">
          <input
            type="search"
            placeholder="Search . . ."
            className=" px-3 rounded-full md:w-[600px] w-[230px] mx-2  bg-white border-black placeholder:text-black border-2  lg:mr-10 text-black h-[40px] focus:outline-none  "
          />
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
    </section>
  );
};
