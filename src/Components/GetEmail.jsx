import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const GetEmail = () => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Lakshay",
      message: message,
    };

    emailjs
      .sendForm("service_1cxdr0r", "template_2d7ym2v", templateParams, {
        publicKey: "B0h7MNQ6ST48kHj2W",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
          console.log(form.current, error, error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" flex flex-col gap-y-16 w-[90%] items-center"
    >
      <div className="flex gap-x-4 ">
        {/* <label className="text-4xl">Name</label> */}
        <input
          type="text"
          name="user_name"
          className="text-4xl text-black p-2"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {/* <label className="text-4xl">Email</label> */}
        <input
          type="email"
          name="user_email"
          className="text-4xl text-black p-2 w-full"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <input
        type="email"
        name="user_email"
        className="text-4xl text-black p-2  w-[90%] "
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        className="text-4xl text-black p-2 w-[80%]"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <input
        type="submit"
        value="Send"
        className="text-4xl cursor-pointer bg-white text-slate-900 font-semibold w-fit px-4 py-2 rounded-xl hover:scale-115 transition-all"
      />
    </form>
  );
};

export default GetEmail;
