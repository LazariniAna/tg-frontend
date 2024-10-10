// components/Form/TextareaForm.tsx

import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextareaFormProps {
  name: string;
  title: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string; 
  className?: string; 
  rows?: number; // Para definir o número de linhas do textarea
}

const TextareaForm: React.FC<TextareaFormProps> = ({ name, title, value, onChange, error, className, rows = 4 }) => {
  return (
    <div className={`mb-4 max-md:w-full ${className}`}>
      <label htmlFor={name} className="mb-2 font-bold">{title}</label>
      <Field
        as="textarea" // Especifica que este Field deve ser um textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
      />
      {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
    </div>
  );
};

export default TextareaForm;
