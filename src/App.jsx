import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  console.log("Jay Radhe Jay Radhe Jay shree krishna bolo Jay Radhe");
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
