
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
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EoAvatar from './navbar/eoAvatar';
import LoginRegister from './navbar/LoginRegister';
import { props } from 'cypress/types/bluebird';


const validationSchemas = Yup.object({
  search: Yup.string().required()
})

export interface validationSchema {
  search: string
}

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

  const initialValues: validationSchema = {
    search: ''
  }


  return (
    <section className="z-30 w-full ">
      <nav className=" bg-white sm:px-5 px-3 justify-between py-2 top-1 flex flex-row  items-center  ">
        <Link href="/" passHref>
          <h1 className="text-lg lg:text-2xl text-black font-bold">Ticketist</h1>
        </Link>

        {/* search */}
        <div className="text-white  items-center flex gap-2">
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null))
                console.log(values);
                
                actions.setSubmitting(false)
              
                
              },)
            }}
          >
            {props => (
              <div className="text-white  items-center flex gap-2">

              <form onSubmit={props.handleSubmit}>
                <input
                  type="search"
                  placeholder="Search....."
                  className="px-3 rounded-full md:w-[600px] w-[230px] mx-2  bg-white border-black placeholder:text-black border-2  lg:mr-10 text-black h-[40px] focus:outline-none items-center"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.search}
                  name="search"
                />
                {props.errors.search && <div id="feedback">{props.errors.search}</div>}
                <button type="submit">Submit</button>
              </form>
              </div>
            )}
          </Formik>

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
