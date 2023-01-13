import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import "./Home.css";
const Navbar = ({ children }) => {
  return (
    <div>
      <AnimatedCursor
        innerSize={30}
        outerSize={40}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          border: "3px solid red",
        }}
      />
      <div className="home-header">
        <div className="drawer drawer-end drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* <!-- Page content here --> */}
            {children}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side my-12">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 bg-secondary text-white rounded-md text-sm ">
              {/* <!-- Sidebar content here --> */}
              <li>
                <NavLink className='mt-4' to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink className='mt-4' to="/about">
                  <HiInformationCircle />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className='mt-4' to="/portfolio">
                  <MdWork /> Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className='mt-4' to="/contact">
                  <MdContactPhone /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
