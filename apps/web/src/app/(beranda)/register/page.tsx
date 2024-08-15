'use client';
import { Form, Formik, FormikProps } from 'formik';
import { registerUser } from '@/libs/actions/user';
import { ISignUp } from '@/types/user';
import { InputRegister } from './_components/input_register';
import { LargeImage } from './_components/large_Image';
import HasReg from './_components/hasReg';
import { signUpSchema } from '@/libs/schema';
import { useRouter } from 'next/navigation';
import {ToastContainer,toast} from 'react-toastify'
export default function Register() {
  const router = useRouter();
  const notify = () => toast.info('Wow so easy!');
  const onRegister = async (data: ISignUp) => {
    try {
      const res = await registerUser(data);
      if (res.status == 'error') throw res.msg;
      // toast('User registered');
      router.push('/');
    } catch (error) {
      toast.error(error as string);
      console.log(error);
    }
  };
  const initialValues: ISignUp = {
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    referral: '',
  };
  return (
    <div className="flex lg:flex-row flex-col mt-20 lg:mt-2 px-2 items-center justify-center max-h-screen ">
      <LargeImage />
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          onRegister(values);
          actions.resetForm();
          console.log(values);
          // router.push('/');
        }}
      >
        {(props: FormikProps<ISignUp>) => {
          return (
            <div className="flex flex-col mx-3 items-center ">
              <Form>
                <div className="flex   flex-col gap-4 lg:gap-5">
                  <h1 className="text-5xl self-center font-bold ">Sign Up</h1>
                  <InputRegister
                    type="text"
                    name="username"
                    placeholder="username"
                  />
                  <InputRegister type="text" name="email" placeholder="email" />
                  <InputRegister
                    type="text"
                    name="phoneNumber"
                    placeholder="phone number"
                  />
                  <InputRegister
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <InputRegister
                    type="text"
                    name="referral"
                    placeholder="refferal number"
                  />
                  <button
                    type="submit"
                    className=" bg-[#ff784b]  text-black w-[300px] md:min-w-[500px] py-4 rounded-full font-semibold hover:bg-black hover:text-white duration-100"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
              <HasReg />
              <button onClick={notify}>asd</button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
