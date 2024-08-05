'use client';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import img from '../../../../public/register.jpg';
import { FcGoogle } from 'react-icons/fc';

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
    <div className="flex items-center justify-center max-h-screen py-5 px-2">
      <div className=" flex flex-col relative">
        <Image
          src={img.src}
          width={1000}
          height={800}
          className="min-w-[600px] relative rounded-2xl "
          alt="cosplay"
        />
        <div className="absolute px- bg-opacity-65 rounded-2xl w-[500px] bottom-5 px-5 py-2 ">
          <h1 className="text-5xl font-black text-white ">Discover many <span className='text-[#32bc9b]'>events</span> near you</h1>
         
          {/*<p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nihil
            ipsam temporibus cupiditate nemo eveniet accusamus officiis cumque
            ad repellat.
          </p> */}
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
            <div className="my-10">
              <Form>
                <div className="flex justify-center items-center flex-col gap-5">
                  <h1 className="text-5xl font-bold ">Sign Up</h1>
                  <div>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Name"
                      className=" md:min-w-[500px] mx-10  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
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
                      className="  md:min-w-[500px] mx-10 rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
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
                      className=" md:min-w-[500px] mx-10 rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
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
                      placeholder="Referral Number"
                      className=" md:min-w-[500px] mx-10 rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
                    />
                    <ErrorMessage
                      name="referral"
                      component={'div'}
                      className="text-red-400 text-sm mx-10"
                    />
                  </div >
                  <button
                    type="submit"
                    className=" bg-[#ff784b] text-black md:min-w-[500px] mx-10 py-4 rounded-full font-semibold hover:bg-black hover:text-white duration-100"
                  >
                    Sign Up
                  </button>
                  <div className='flex gap-2 pb-5'>
                  <hr className="w-40 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <p className="py-5 flex items-center gap-2">OR </p>
                  <hr className="w-40 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </div>

                  
                </div>
              </Form>

              <button
                type="submit"
                className="flex justify-center items-center gap-2 bg-white border-2 border-black text-black md:min-w-[500px] mx-10 py-4 rounded-full font-semibold hover:bg-black hover:text-white duration-100"
              >
                <FcGoogle size={23} />
                Sign up with Google
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
