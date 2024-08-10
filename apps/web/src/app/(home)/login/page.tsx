
'use client';
import * as yup from 'yup';
import { FaUser } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import img from '@/../../public/concert.jpg';
import Image from 'next/image';
const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter a valid email')
    .required('email is required'),
  password: yup.string().required('password is required'),
});
interface ILogin {
  email: string;
  password: string;
}
export default function Login() {
  const initialValues: ILogin = { email:'', password:'' };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex max-w-max lg:border-2 rounded-xl lg:h-[500px]">
        <div className="bg-black rounded-l-xl  text-white max-w-[800px] gap-5  md:flex items-center justify-center  flex-col hidden ">
          <video width="full" loop autoPlay preload="none">
            <source src="/login.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='absolute flex items-center justify-center flex-col text-black bg-white bg-opacity-30 p-10 rounded-xl'>
          <h1 className="font-bold text-2xl">Glad to see You!</h1>
          <p className="max-w-[350px] pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, hic tenetur. Nihil harum provident aut maiores? Odio natus fugiat nostrum.
          </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center  relative lg:block ">
          <Image src={img} width={1000} height={600} className='md:hidden ' alt='koding'/>
          <div className='absolute text-center w-0'>
          <h1 className="text-3xl font-semibold py-5">Hello, friend</h1>
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
                    <div className="flex flex-col gap-12 lg:gap-5 items-center">
                      <div className="flex gap-2 justify-center items-center">
                        <FaUser size={23} />
                        <div>
                          <Field
                            type="text"
                            name="email"
                            
                            placeholder="Email"
                            className=" lg:w-[280px] bg-transparent  placeholder:text-black pl-2 pr-10 py-3 border-2 border-black rounded-xl"
                          />
                          <ErrorMessage
                            name="email"
                            component={'div'}
                            className="text-red-400 text-[15px] "
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-center items-center ">
                        <FaLock size={23} />
                        <div>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className=" lg:w-[280px] bg-transparent  pl-2 pr-10 py-3 border-2 border-black  rounded-xl "
                            />
                          <ErrorMessage
                            name="password"
                            component={'div'}
                            className="text-red-400 text-[15px] "
                            />
                        </div>
                      </div>
                      <button
                    
                    type="submit"
                    className="bg-[#ff784b] font-medium  text-black py-3 rounded-full  text-sm w-[250px] lg:w-[280px] hover:bg-black hover:text-white duration-100"
                    >
                        Sign In
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
            </div>
        </div>
      </div>
    </div>
  );
}
