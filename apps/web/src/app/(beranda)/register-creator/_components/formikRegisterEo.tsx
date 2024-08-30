'use client';
import { ISignUpEo } from '@/types/user';
import { Form, Formik, FormikProps } from 'formik';
import { InputRegister } from './inputReg_creator';
import { signUpSchemaEo } from '@/libs/schema';
import { registerEo } from '@/libs/actions/eo';
import { toast } from 'react-toastify';
import { navigate } from '@/libs/actions/server';

export default function FormikRegisterEo() {
  const onRegisterEo = async (data: ISignUpEo, actions: any) => {
    try {
      const res = await registerEo(data);
      if (res.status == 'error') throw res.msg;
      toast.success(
        'register success, check your email account for verification',
      );
      actions.resetForm();

      navigate('/');
    } catch (error) {
      toast.error(error as string);
      console.log(error);
    }
  };
  const initialValues: ISignUpEo = {
    creator: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchemaEo}
      onSubmit={(values, actions) => {
        onRegisterEo(values, actions);
        //
      }}
    >
      {(props: FormikProps<ISignUpEo>) => {
        return (
          <div className="px-5">
            <Form>
              <div className="flex flex-col gap-2 justify-center lg:gap-5 items-center">
                <div className="flex gap-2 justify-center items-center">
                  <InputRegister
                    type="text"
                    name="creator"
                    placeholder="Creator Username"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center ">
                  <InputRegister
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center ">
                  <InputRegister
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
