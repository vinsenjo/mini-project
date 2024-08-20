import * as yup from 'yup';

//Schema untuk formik login
export const LoginSchema = yup.object().shape({
  data: yup
    .string().required('data is required'),
  password: yup.string().required('password is required'),
});



//Schema untuk formik register
export const signUpSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup
    .string()
    .email('please enter a valid email')
    .required('email is required'),
  password: yup.string().required('password is required'),
  phoneNumber: yup.string().required('phone number is required'),
  referral: yup.string().default(''),
});
//Schema untuk formik register Eo
export const signUpSchemaEo = yup.object().shape({
  creator: yup.string().required('username is required'),
  email: yup
    .string()
    .email('please enter a valid email')
    .required('email is required'),
  password: yup.string().required('password is required'),

});
