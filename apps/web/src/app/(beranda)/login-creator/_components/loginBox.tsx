'use client';
import { loginCreator } from '@/libs/actions/eo';
import { LoginSchema } from '@/libs/schema';
import { EoLogin } from '@/types/user';
import { Form, Formik, FormikProps } from 'formik';
import { FaLock, FaUser } from 'react-icons/fa';
import { Input } from '../../login/_components/input_login';
import { ToastContainer } from 'react-toastify';
import { InputEo } from './input_login_eo';
import FormikLoginEo from './formikLoginEo';

export default function LoginBox() {
  return (
    <div className="border-2 py-2 px-5 flex flex-col justify-center items-center gap-5 rounded-lg">
      <h1 className="text-black font-semibold text-3xl">Login as Creator</h1>
      <FormikLoginEo />
    </div>
  );
}
