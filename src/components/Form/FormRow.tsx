import React from 'react';

interface FormRowProps {
  children: React.ReactNode;
  className?: string;
  notSpace?: boolean;
}

const FormRow: React.FC<FormRowProps> = ({ children, className, notSpace }) => {
  return <div className={`flex ${notSpace ? '' : 'justify-between'} w-full gap-4 flex-wrap ${className}`}>{children}</div>;
};

export default FormRow;
