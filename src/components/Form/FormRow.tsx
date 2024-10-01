import React from 'react';

interface FormRowProps {
  children: React.ReactNode;
  className?: string;
}

const FormRow: React.FC<FormRowProps> = ({ children, className }) => {
  return <div className={`flex justify-between w-full gap-4 flex-wrap ${className}`}>{children}</div>;
};

export default FormRow;
