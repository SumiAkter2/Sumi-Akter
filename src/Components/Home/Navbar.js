import React from "react";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
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
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/alishaakhtersumi.sumi"
              className="hover:text-black text-sky-500 bg-white w-6 h-6 rounded-full p-1"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/thesumiakter/"
              className="hover:text-black text-sky-500 bg-white w-6 h-6 rounded-full p-1"
            >
              <GrLinkedinOption />
            </a>
            <AiOutlineTwitter className="hover:text-black text-sky-500 bg-white w-6 h-6 rounded-full p-1" />
          </div>
          <div className="lg:block hidden">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <NavLink className="ml-2" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2 " to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="ml-2" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="font-bold text-sm"> sumiakter6335@gmail.com</p>
        </div>
      </div>
      <div className=" ">
        <ul className="m-1 p-2 menu  w-16 bg-secondary  rounded-md text-white text-sm ">
          <div className="flex justify-center items-center lg:hidden mx-auto">
            <li>
              <NavLink to="/" className="rounded-md ">
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md mt-2" to="/about">
                <HiInformationCircle />
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md mt-2" to="/portfolio">
                <MdWork />
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md mt-2" to="/contact">
                <MdContactPhone />
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
