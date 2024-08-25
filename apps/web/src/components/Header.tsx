
'use client';
import Link from 'next/link';
import { deleteCookie, getData, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UserAvatar from './navbar/userAvatar';
import EoAvatar from './navbar/eoAvatar';
import LoginRegister from './navbar/LoginRegister';
import Search from './navbar/search';
import Searchbar from './navbar/search';

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

  return (
    <section className="z-30 w-full ">
      <nav className=" bg-white sm:px-5 px-3 justify-between py-2 top-1 flex flex-row  items-center  ">
        <Link href="/" passHref>
          <h1 className="text-lg lg:text-2xl text-black font-bold">Ticketist</h1>
        </Link>

        {/* search */}
        <div className="text-white  items-center flex gap-2">
          <Searchbar />

          {/* avatar */}
          <UserAvatar token={isAuthenticated} role={role} logOut={logOut} />
          <EoAvatar token={isAuthenticated} role={role} logOut={logOut} />
          <LoginRegister token={isAuthenticated} />
        </div>
        {/* <Hamburger auth={isAuthenticated} /> */}
      </nav>
    </section >
  );
};
