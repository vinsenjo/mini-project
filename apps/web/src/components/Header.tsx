'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import Hamburger from './modal/navbarHamburger';
import { deleteCookie, getCookie, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const cookies = getCookie('token');
  const logOut = () => {
    try {
      if (!cookies) throw 'already logout';
      deleteCookie('token');
      toast.success('success logout');
      navigate('/');
    } catch (error) {
      toast.error('error');
    }
  };
  return (
    <section className="z-30 ">
      <nav className=" bg-white sm:px-5 px-3  py-2 top-1 flex flex-row lg:justify-between items-center  ">
        <Link href="/" passHref>
          <Image
            src={'/img/logo-black.png'}
            height={130}
            width={130}
            className="w-[80px] lg:w-[150px]"
            alt="logo"
          />
        </Link>
        {/* div untuk search & login register */}
        <div className="text-white  items-center flex gap-2">
          <input
            type="search"
            placeholder="Search . . ."
            className=" px-3 rounded-full md:w-[600px] w-[230px] mx-2  bg-white border-black placeholder:text-black border-2  lg:mr-10 text-black h-[40px] focus:outline-none  "
          />
          <div>
            <div className="dropdown dropdown-hover  dropdown-end">
              {/* avatar */}
              <div className="avatar">
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
          {/* div untuk login register */}
          <div className={` hidden lg:flex`}>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 rounded-full w-32  border-white border-2 hoverbg-black bg-[#FF7B4F] hover:text-white text-black"
              >
                Login
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
              >
                <li>
                  <Link href={'/login'}>User</Link>
                </li>
                <li>
                  <Link href={'/login-creator'}>EO</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 rounded-full w-32 bg-white text-black hover:border-0 hover:bg-black hover:text-white"
              >
                Register
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
              >
                <li>
                  <Link href={'/register'}>User</Link>
                </li>
                <li>
                  <Link href={'/register-creator'}>EO</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="avatar lg:hidden" onClick={handleModal}>
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
          <Hamburger state={openModal} />
        </div>
      </nav>
    </section>
  );
};
