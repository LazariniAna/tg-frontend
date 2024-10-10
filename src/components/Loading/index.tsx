import React from "react";

const LoadingOverlay: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-100"
    >
      <p className="text-white">Carregando...</p>
    </div>
  );
};

export default LoadingOverlay;
