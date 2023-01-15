import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-secondary ">
      <div className=" py-4 text-white">
        <div className="flex justify-between items-center px-6 ">
          <div className="flex justify-center items-center gap-6 ">
            <a
              href="https://www.facebook.com/alishaakhtersumi.sumi"
              className="hover:text-sky-500"
            >
              <FaFacebookF size="25px" />
            </a>
            <a
              href="https://www.linkedin.com/in/thesumiakter/"
              className="hover:text-sky-500"
            >
              <GrLinkedinOption size="25px" />
            </a>
            <AiOutlineTwitter size="25px" className="hover:text-sky-500" />
          </div>
          <div className="lg:block hidden">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <NavLink className="ml-2" to="/">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2" to="/portfolio">
                  {" "}
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2 " to="/about">
                  {" "}
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2" to="/contact">
                  {" "}
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="font-bold "> sumiakter6335@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
