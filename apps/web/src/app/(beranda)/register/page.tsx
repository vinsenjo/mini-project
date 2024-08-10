'use client';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import img from '../../../../public/register.jpg';
import { FcGoogle } from 'react-icons/fc';
import { GoogleSignUp } from '@/components/login/google';

const signUpSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup
    .string()
    .email('please enter a valid email')
    .required('email is required'),
  password: yup.string().required('password is required'),
  referral: yup.string(),
});

interface ISignUp {
  username: string;
  email: string;
  password: string;
  referral: string;
}
export default function Register() {
  const initialValues: ISignUp = {
    username: '',
    email: '',
    password: '',
    referral: '',
  };
  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-start  pt-3  justify-center min-h-screen py-5 px-2">
      <div className="hidden lg:flex flex-col relative">
        <Image
          src={img.src}
          width={1000}
          height={800}
          className="md:min-w-[600px] mt-2 md:relative rounded-2xl "
          alt="cosplay"
        />
        <div className="md:absolute hidden md:flex px- bg-opacity-65 rounded-2xl w-[500px] bottom-5 px-5 py-2 ">
          <h1 className="text-5xl font-black text-white ">
            Discover many <span className="text-[#32bc9b]">events</span> near
            you
          </h1>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<ISignUp>) => {
          return (
            <div className="mt-2 flex flex-col  items-center ">
              <Form>
                <div className="flex   flex-col gap-4 lg:gap-5">
                  <h1 className="text-5xl font-bold ">Sign Up</h1>
                  <div>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Name"
                      className=" md:min-w-[500px] w-full  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="username"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="  md:min-w-[500px] w-full  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="email"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=" md:min-w-[500px] w-full  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="password"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="referral"
                      placeholder="Phone Number"
                      className=" md:min-w-[500px] w-full  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="referral"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="referral"
                      placeholder="Referral Number"
                      className=" md:min-w-[500px] w-full  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="referral"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" bg-[#ff784b]  text-black w-[300px] md:min-w-[500px]  py-3 rounded-full font-semibold hover:bg-black hover:text-white duration-100"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
              <div className="mx-24 my-3 flex gap-2 ">
                <hr className="w-32 md:w-44 h-px mt-2  md:my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="md:py-2 text- flex items-center gap-2">OR </p>
                <hr className="w-32 md:w-44 mt-2 h-px md:my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <GoogleSignUp />
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
