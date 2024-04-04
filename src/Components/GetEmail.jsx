import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const GetEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message Sent!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" flex flex-col gap-y-16 w-[90%] items-center"
    >
      <div className="flex gap-x-4 w-full">
        <input
          type="text"
          name="from_name"
          className="text-4xl text-black w-[49%] p-2"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="from_email"
          className="text-4xl text-black p-2 w-[49%]"
          placeholder="Email"
          required
        />
      </div>
      <input
        type="number"
        name="from_phoneNumber"
        className="text-4xl text-black p-2  w-[90%] "
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        className="text-4xl text-black p-2 w-[80%]"
        placeholder="Message"
        required
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

// create only one useState to clear the input box

// OR

// Comment 8th line
