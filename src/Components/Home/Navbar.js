import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
const Navbar = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className=" block pt-4">
        <div className="flex justify-around items-center gap-x-6 ">
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
          <p> sumiakter6335@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
