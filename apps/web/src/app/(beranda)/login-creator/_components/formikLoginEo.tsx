'use client';
import { LoginSchema } from '@/libs/schema';
import { EoLogin } from '@/types/user';
import { Formik, FormikProps, Form } from 'formik';
import { FaUser, FaLock } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { InputEo } from './input_login_eo';
import { loginCreator } from '@/libs/actions/eo';
import {  useRouter } from 'next/navigation';

export default function FormikLoginEo() {
  const router = useRouter();
  const onLoginEo = async (data: EoLogin, actions: any) => {
    try {
      const res = await loginCreator(data);
      if (res.status == 'error') throw res.msg;
      toast.success('login success');
      actions.resetForm();
      router.push('/');
    } catch (error) {
      toast.error(error as string);
      console.log(error);
    }
  };
  const initialValues: EoLogin = { data: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        onLoginEo(values, actions);
        //
      }}
    >
      {(props: FormikProps<EoLogin>) => {
        return (
          <div className="px-5">
            <Form>
              <div className="flex flex-col gap-2 justify-center lg:gap-5 items-center">
                <div className="flex gap-2 justify-center items-center">
                  <FaUser className=" " size={25} />
                  <InputEo
                    type="text"
                    name="data"
                    placeholder="Username or Email"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center ">
                  <FaLock className=" " size={25} />
                  <InputEo
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
  );
}
