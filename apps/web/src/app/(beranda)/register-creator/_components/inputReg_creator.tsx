import { Field, ErrorMessage } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const InputRegister: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
}) => {
  return (
    <div>
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        className=" md:min-w-[500px] w-full bg-white text-black  rounded-md pl-2 pr-10 py-4 border-2 border-gray-400"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};
