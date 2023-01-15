import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";

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
          <p className="font-bold"> sumiakter6335@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
