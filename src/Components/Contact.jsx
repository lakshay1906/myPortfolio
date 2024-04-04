import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      id="contact-detail"
      className=" w-[55rem] mx-[5.5rem] mt-8 flex justify-between mb-flex-wrap "
    >
      <div
        id="phone_num"
        className="w-[21rem] flex justify-between items-center"
      >
        <FiPhoneCall size={"3.8rem"} color="#00689a" />
        <span id="num" className="text-[2rem]">
          <h5 className="text-[2rem]">Phone No. :</h5>
          <h4 className="text-[2.1rem]">+91 9813173434</h4>
        </span>
      </div>
      <div
        id="email"
        className="text-[2rem] w-[32rem] flex justify-between items-center"
      >
        <MdOutlineAlternateEmail size={"4rem"} color="#00689a" />
        <span>
          <h5 className="text-[2rem]">Email :</h5>
          <h4 className="text-[2.1rem]">lakshaybhati1906@gmail.com</h4>
        </span>
      </div>
    </div>
  );
};

export default Contact;
