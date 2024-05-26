import React from "react";

function Heading({ text }) {
  return (
    <>
      <h1 className="text-3xl text-[#090917] mx-auto w-fit underline underline-offset-2 mb-6 bg-white px-4 py-2 rounded-lg font-bold mt-10">
        {text}
      </h1>
    </>
  );
}

export default Heading;
