import React from 'react';
import './Button.css';
const Button = ({children}) => {
    return (
      <button className="mt-12">
        <span>{children}</span>
        <div class="top"></div>
        <div class="left"></div>
        <div class="bottom"></div>
        <div class="right"></div>
      </button>
    );
};

export default Button;