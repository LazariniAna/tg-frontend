import React from 'react';
import { ErrorMessage } from 'formik';

interface InputFormRefProps {
  name: string;
  type: string;
  title: string;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  innerRef?: React.Ref<HTMLInputElement>;
}

const InputFormRef: React.FC<InputFormRefProps> = ({ name, type, title, value, onChange, error, className, onBlur, innerRef }) => {
  return (
    <div className={`mb-4 max-md:w-full ${className}`}>
      <label htmlFor={name} className="mb-2 font-bold">{title}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={innerRef}  // Passa a innerRef diretamente aqui
        className={`border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
      />
      {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
    </div>
  );
};

export default InputFormRef;
