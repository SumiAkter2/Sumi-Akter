import React, { useRef } from "react";
import Button from "../Button/Button";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import { ImLocation } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
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
        <div className="card text-center font-sans p-12 mx-6 mt-8 ">
          <h3 className=" text-secondary text-3xl font-bold">
            Please Contact Me
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:flex">
              <div className="inputbox m-6">
                <input
                  type="text"
                  required
                  name="user_name"
                  className="text-sm"
                />

                <span className="text-xl">Name</span>
                <i></i>
              </div>
              <div className="inputbox m-6">
                <input name="user_email" required="required" type="email" />
                <span>Email</span>
                <i></i>
              </div>
            </div>

            <div className="inputbox m-6">
              <input name="message" className="message" required="required" />
              <span>Message</span>
              <i></i>
            </div>
            <Button type="submit" className="mb-6">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
