import React, { useRef } from "react";
import Button from "../Button/Button";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { toast } from "react-toastify";
import female from "../../img/contact.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0i5kzgk",
        "template_hdatjgj",
        form.current,
        "zaDkgqaW77bTY4aEn"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Successfully send email !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <h1 className="text-center text-secondary text-3xl font-bold lg:text-5xl my-6">
        Contact Me
      </h1>
      <div className="py-12 lg:flex justify-center items-center ">
        <div className="card font-bold font-sans p-12 mx-6 mt-8">
          <h3 className=" text-secondary text-3xl text-center">
            Contact Information
          </h3>
          <div className="mt-6 lg:text-xl text-sm text-center">
            <img
              src={female}
              alt="female-logo"
              className="w-32 h-32 mx-auto rounded-md bg-secondary "
            />
            <div className="flex  justify-center items-center mt-6">
              <ImLocation
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              <div className="text-start">
                <p>Location</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex  justify-center items-center mt-6">
              <IoMdMail
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              <div className="text-start">
                <p> Email</p>
                <p className="lg:text-sm text-xs">sumiakter6335@gmail.com</p>
              </div>
            </div>

            <div className="flex  justify-center items-center mt-6">
              <BsFillTelephoneForwardFill
                size="35px"
                className="mr-4 bg-secondary p-2 rounded-full fill-black"
              />
              <div className="text-start">
                <p>Phone Number</p>
                <p>+8801718723057</p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= */}
        <div className="card text-center font-sans p-12 mx-6 mt-8 ">
          <h3 className=" text-secondary text-3xl font-bold">
            Please Send A Email
          </h3>
          <form ref={form} onSubmit={sendEmail} className="mt-12">
            <div className="lg:flex">
              <div className=" mx-auto">
                <input
                  type="text"
                  required
                  name="user_name"
                  className="text-sm input mt-6"
                  placeholder="Name"
                />
              </div>
              <div className=" lg:ml-2 mx-auto">
                <input
                  className="input mt-6"
                  name="user_email"
                  placeholder="Email"
                  required="required"
                  type="email"
                />
              </div>
            </div>

            <div className=" mx-auto">
              <textarea
                name="message"
                className="message mt-6 input"
                placeholder="Message"
                required="required"
              />
            </div>

            <Button
              type="submit"
              className="mb-6 flex justify-center items-center"
            >
              <p className=" flex justify-center items-center">
                <IoMdSend className="mr-4" />
                Send
              </p>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
