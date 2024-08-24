
'use client';
import Link from 'next/link';
import { deleteCookie, getData, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UserAvatar from './navbar/userAvatar';
import { event } from 'cypress/types/jquery';
import { FaSearch } from "react-icons/fa";


import EoAvatar from './navbar/eoAvatar';
import LoginRegister from './navbar/LoginRegister';

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState('');

  const [auth, setAuth] = useState('');

  useEffect(() => {
    const authToken = Cookies.get('token');
    if (authToken) setIsAuthenticated(authToken!);
  }, []);

  useEffect(() => {
    const auth = async (token: any) => {
      await axios
        .get('http://localhost:8000/api/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (res) => setAuth(res.data.user.role))
        .catch((err) => console.log('no cookie'));
    };
    auth(Cookies.get('token'));
  }, []);
  const role = auth;
  console.log(role);

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
    <section className="z-30 w-full ">
      <nav className=" bg-white sm:px-5 px-3 justify-between py-2 top-1 flex flex-row  items-center  ">
        <Link href="/" passHref>
          <h1 className="text-lg lg:text-2xl text-black font-bold">Ticketist</h1>
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
          <UserAvatar token={isAuthenticated} role={role} logOut={logOut} />
          <EoAvatar token={isAuthenticated} role={role} logOut={logOut} />
          <LoginRegister token={isAuthenticated} />
        </div>
        {/* <Hamburger auth={isAuthenticated} /> */}
      </nav>
    </section>
  );
};
