import React from "react";
import { IoMdMail } from "react-icons/io";
import Button from "../Button/Button";
import { ImLocation } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-center text-secondary text-3xl font-bold lg:text-5xl my-6">
        Contact Me
      </h1>
      <div className="py-12 lg:flex justify-center items-center ">
        <div class="card font-bold font-sans p-12 mx-6 mt-8">
          <h3 className=" text-secondary text-3xl ">Contact Information</h3>
          <div className="mt-6 text-xl">
            <p className="flex  justify-start items-center mt-6">
              <ImLocation
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              Location
            </p>
            <p>Dhaka, Bangladesh</p>
            <p className="flex  justify-start items-center mt-6">
              <IoMdMail
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              Mail
            </p>
            <p>sumiakter6335@gmail.com</p>
            <p className="flex  justify-start items-center mt-6">
              <BsFillTelephoneForwardFill
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              Phone Number
            </p>
            <p>+8801718723057</p>
          </div>
        </div>

        {/* ======================= */}
        <div className="card  text-center font-bold font-sans p-12 mx-6 mt-8 ">
          <h3 className=" text-secondary text-3xl">Please Contact Me</h3>
          <form action="" className="text-xl">
            <div className="flex">
              <div class="inputbox m-4">
                <input required="required" type="text" />
                <span>Name</span>
                <i></i>
              </div>
              <div class="inputbox m-4">
                <input required="required" type="email" />
                <span>Email</span>
                <i></i>
              </div>
            </div>
            <div className="flex ">
              <div class="inputbox ml-4 mb-2">
                <input required="required" type="number" />
                <span>Phone </span>
                <i></i>
              </div>
              <div class="inputbox ml-4 mb-2">
                <input required="required" type="text" />
                <span>Subject</span>
                <i></i>
              </div>
            </div>
            <div class="inputbox ml-4 mb-2">
              <textarea required="required" type="text" />
              <span>Message</span>
              <i></i>
            </div>
            <buttons className="mt-2 ">
              <span class="box ">
                <p className="flex justify-center items-center">
                  <IoMdSend className="mr-4" /> Send
                </p>
              </span>
            </buttons>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
