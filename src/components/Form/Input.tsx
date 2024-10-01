// components/Form/InputForm.tsx

import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputFormProps {
  name: string;
  type: string;
  title: string;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; 
  className?: string; 
}

const InputForm: React.FC<InputFormProps> = ({ name, type, title, value, onChange, error, className }) => {
  return (
    <div className={`mb-4 max-md:w-full ${className}`}>
      <label htmlFor={name} className="mb-2 font-bold">{title}</label>
      <Field
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
      />
      {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
    </div>
  );
};

export default InputForm;
