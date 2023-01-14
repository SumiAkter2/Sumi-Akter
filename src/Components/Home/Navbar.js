import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
const Navbar = ({ children }) => {
  return (
    <div>
      <div className="fixed top-5 left-6 lg:block hidden">
        <div className="flex justify-around items-center gap-x-6 ">
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
      </div>
      <ul className="flex justify-center items-center text-white rounded-md pt-5 font-bold  px-12 lg:hidden">
        <li>
          <NavLink className="flex justify-center items-center mr-4" to="/">
            <FaHome className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex justify-center items-center mr-4"
            to="/about"
          >
            <HiInformationCircle className="mr-2" />
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex justify-center items-center mr-4"
            to="/portfolio"
          >
            <MdWork className="mr-2" /> Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex justify-center items-center mr-4"
            to="/contact"
          >
            <MdContactPhone className="mr-2" /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
