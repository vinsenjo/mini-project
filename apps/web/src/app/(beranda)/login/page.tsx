'use client';

import { FaUser } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';
import { LoginSchema } from '@/libs/schema';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import img from '@/../../public/concert.jpg';
import img2 from '@/../../public/login/login.jpg';
import Image from 'next/image';
import { Input } from '@/app/(beranda)/login/_components/input_login';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@/app/(beranda)/login/_components/google_button';
import Headings from './_components/heading';
import LoginLine from './_components/login_hr_line';
import Link from 'next/link';
import { UserLogin } from '@/types/user';
import { loginUser } from '@/libs/actions/user';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ok } from 'assert';
import { result } from 'cypress/types/lodash';

const onLogin = async (data: UserLogin) => {
  try {
    const res = await loginUser(data);

    if (res.status == 'error') throw res.msg;
  } catch (error) {
    console.log(error);
  }
};

export default function Login() {



  const initialValues: UserLogin = { data: '', password: '' };

  return (
    <div className="flex items-center md:justify-around md:bg-black relative justify-center h-screen max-w-screen-2xl">
      <Image
        src={img2}
        alt="login"
        className="lg:absolute lg:block h-screen hidden max-w-full"
      />
      <div className=" flex lg:mx-10 lg:w-max lg:border-[15px] min-h-[550px] border-black z-10 rounded-2xl ">
        <Headings />
        <div className=" bg-black  flex flex-col justify-center md:w-[400px] gap-10 items-center   ">
          <Image
            src={'/login/login_mobile.jpg'}
            width={1000}
            height={600}
            className="min-h-screen md:hidden"
            alt="dj"
          />
          <div className="absolute md:bg-black md:flex md:flex-col  lg:justify-center lg:items-center  lg:top-[20%] md:top-0 top-[46%]">
            <h1 className="text-3xl ml-5 text-white   font-semibold ">
              Hello, <span className="text-[#32bc9b]">friend</span>
            </h1>
            <p className="ml-5 text-sm p-2 pb-5  max-w-[300px] text-white  ">
              Sign in to access your account
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={(values, actions) => {
                onLogin(values);

                // alert('login succes');
                actions.resetForm();
              }}
            >
              {(props: FormikProps<UserLogin>) => {
                return (
                  <div className="px-5">
                    <Form>
                      <div className="flex flex-col gap-2 justify-center lg:gap-5 items-center">
                        <div className="flex gap-2 justify-center items-center">
                          <FaUser className="text-white " size={25} />
                          <Input
                            type="text"
                            name="data"
                            placeholder="Username or Email"
                          />
                        </div>
                        <div className="flex gap-2 justify-center items-center ">
                          <FaLock className="text-white " size={25} />
                          <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="bg-[#ff784b] lg:border-2 lg:border-[#ff784b] text-black py-2 rounded-full font-semibold  w-full  hover:bg-black hover:text-white  duration-100"
                        >
                          Sign In
                        </button>
                    
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>
            <LoginLine />
            <GoogleLogin />
            <p className="ml-5 text-sm p-2 pb-5  max-w-[300px] text-white ">
              Don't have an account ?
              <span className="text-blue-600">
                <Link href="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
