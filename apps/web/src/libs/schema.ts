import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email('please enter a valid email')
      .required('email is required'),
    password: yup.string().required('password is required'),
  });