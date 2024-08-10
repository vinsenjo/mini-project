'use client';

import { FaUser } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';
import { LoginSchema } from '@/libs/schema';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import img from '@/../../public/concert.jpg';
import img2 from '@/../../public/login/login.jpg';
import Image from 'next/image';
import { Input } from '@/components/login/input_login';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@/components/login/google';

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const initialValues: ILogin = { email: '', password: '' };
  return (
    <div className="flex items-center md:justify-around md:bg-black justify-center min-h-screen max-w-screen-2xl">
      <Image
        src={img2}
        alt="login"
        className="lg:absolute lg:block h-screen hidden max-w-full"
      />
      <div className=" flex lg:mx-10 lg:w-max lg:border-[15px] border-black z-10 rounded-xl lg:h-[600px]">
        <div className="md:bg-black border-[10px] border-black  lg:bg-transparent p-4  lg:w-[700px] rounded-xl   text-white  gap-5  md:flex justify-end  flex-col hidden ">
          <h1 className="text-white text-6xl max-w-[500px] font-bold">
            Explore more <span className="text-[#32bc9b]">events</span> with us
          </h1>
          <p className="text-white text-lg max-w-[500px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            saepe beatae quos quibusdam nulla. Similique voluptatibus nihil
            natus a cum!
          </p>
        </div>
        <div className=" bg-black  flex flex-col justify-center md:w-[400px] gap-10 items-center relative  ">
          <Image
            src={img}
            width={1000}
            height={600}
            className="min-h-screen md:hidden"
            alt="dj"
          />
          <div className="absolute md:bg-black md:flex md:flex-col  lg:justify-center lg:items-center  lg:top-[20%] md:top-0 top-[46%]">
            <h1 className="text-3xl ml-5 text-white   font-semibold ">
              Hello, <span className='text-[#32bc9b]'>friend</span>
            </h1>
            <p className="ml-5 text-sm p-2 pb-5  max-w-[300px] lg:text-white  text-[#32bc9b]">
              Sign in to access your account
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props: FormikProps<ILogin>) => {
                return (
                  <div className="px-5">
                    <Form>
                      <div className="flex flex-col gap-2 justify-center lg:gap-5 items-center">
                        <div className="flex gap-2 justify-center items-center">
                          <FaUser className="text-white " size={25} />
                          <Input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="flex gap-2 justify-center items-center ">
                          <FaLock className="text-white " size={25} />
                          <Input
                            type="text"
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
            <div className='lg:flex gap-3 my-2 hidden text-white'>
                  <hr className="my-3 lg:w-32 h-px  bg-white border-0 dark:bg-gray-700" />
                  <p className="flex  items-center gap-2">or</p>
                  <hr className="lg:w-32 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>
           
            <GoogleLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}
