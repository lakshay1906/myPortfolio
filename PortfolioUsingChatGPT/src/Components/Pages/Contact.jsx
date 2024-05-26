import React from "react";
import GetEmail from "../MinorComponents/GetEmail";
import ResumeBtn from "../MinorComponents/ResumeBtn";
import SocialLinks from "../MinorComponents/SocialLinks";
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Heading from "../MinorComponents/Heading";

function Contact() {
  return (
    <>
      <div id="contact" className="mx-28 mb-10">
        <Heading text={"Contact Us"} />
        <div className="flex justify-between items-start res-contact">
          <div className="w-[50%] res-email">
            <GetEmail />
          </div>
          <div className="w-[45%] h-[90%] flex flex-col gap-y-2 text-xl mt-3 res-address">
            <div className="flex flex-col gap-1 res-icons">
              <div className="flex items-center gap-x-2">
                <IoHome size={"1.3rem"} /> Faridabad, Haryana
              </div>
              <div className="flex items-center gap-x-2">
                <FaPhoneVolume size={"1.3rem"} /> +91 9813173434
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosMail size={"1.3rem"} /> lakshaybhati1906@gmail.com
              </div>
            </div>
            <ResumeBtn />
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
