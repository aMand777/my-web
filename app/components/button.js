import React from 'react';

const Button = ({ name, className, ...rest }) => {
  return (
    <button {...rest} className={`bg-slate-500 opacity-70 p-5 ${className}`}>
      {name}
    </button>
  );
};

export default Button;
