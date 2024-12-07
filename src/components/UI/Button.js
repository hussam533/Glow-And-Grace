import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;