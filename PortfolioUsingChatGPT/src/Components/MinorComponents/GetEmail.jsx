import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Countries from "./CountryWithCodes";

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
      className=" flex flex-col gap-y-3 w-full my-5"
    >
      <input
        type="text"
        name="from_name"
        className="text-xl text-black w-full p-2"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="from_email"
        className="text-xl text-black p-2 w-full"
        placeholder="Email"
        required
      />
      <div className="flex gap-x-2">
        <select
          id="countryCodes"
          name="from_country"
          className="text-black w-40 text-lg"
        >
          <option value="+91">+91 India</option>
          {Countries.filter((ele) => ele.name !== "India").map((ele, idx) => (
            <option key={idx} value={ele.code} className="text-black">
              {ele.code} {" " + ele.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="from_phoneNumber"
          className="text-xl text-black p-2  w-full "
          placeholder="Phone Number"
          maxLength={10}
        />
      </div>
      <textarea
        name="message"
        className="text-xl text-black p-2 w-full"
        placeholder="Message"
        rows={4}
        required
      />
      <input
        type="submit"
        value="Send"
        className="text-xl cursor-pointer bg-white text-[#090917] font-semibold w-[90%] mx-auto py-1 rounded-md hover:scale-105 transition-all text-center"
      />
    </form>
  );
};

export default GetEmail;

// create only one useState to clear the input box

// OR

// Comment 8th line
