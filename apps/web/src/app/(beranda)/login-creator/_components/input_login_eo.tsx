import { Field, ErrorMessage } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const InputEo: React.FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <div>
      <Field 
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        className="lg:w-[280px] bg-transparent     pl-2 pr-10  py-3 border-2 rounded-xl"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};
