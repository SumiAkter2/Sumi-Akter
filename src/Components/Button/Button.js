import React from "react";
import "./Button.css";
import AOS from "aos";
const Button = ({ children }) => {
  AOS.init();
  return (
    <button
      className="mt-12"
      data-aos="flip-left"
      data-aos-anchor-placement="bottom-bottom"
    >
      <span>{children}</span>
      <div class="top"></div>
      <div class="left"></div>
      <div class="bottom"></div>
      <div class="right"></div>
    </button>
  );
};

export default Button;
