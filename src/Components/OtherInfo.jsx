import React, { useState } from "react";
import { PiTrendUp } from "react-icons/pi";

const OtherInfo = () => {
  const [education, setEducation] = useState(true);
  const [hobbies, setHobbies] = useState(false);
  const [strength, setStrength] = useState(false);
  const [certificates, setCertificates] = useState(false);

  return (
    <div className="w-full flex flex-col items-center text-4xl">
      <h1 className="text-5xl font-semibold underline underline-offset-2">
        More about me :
      </h1>
      <div className="flex gap-x-10 my-32 px-20 w-[90%] h-[30rem] mx-auto border border-green-700 pb-64 pb">
        <div className="relative w-3/12 border border-yellow-700 h-96">
          <div className=" w-full absolute border border-blue-700 top-0 left-[0%]">
            <ul className="font-semibold flex flex-col gap-y-8 text-[2.5rem]">
              <li
                className="hover:cursor-pointer underline-offset-2"
                onClick={() => {
                  setEducation(true);
                  setHobbies(false);
                  setStrength(false);
                  setCertificates(false);
                }}
              >
                <span
                  style={{
                    textDecoration: education ? "black wavy underline" : "",
                  }}
                >
                  Education
                </span>{" "}
                ➡️
              </li>
              <li
                className="hover:cursor-pointer underline-offset-2"
                onClick={() => {
                  setEducation(false);
                  setHobbies(true);
                  setStrength(false);
                  setCertificates(false);
                }}
              >
                <span
                  style={{
                    textDecoration: hobbies ? "black wavy underline" : "",
                  }}
                >
                  Hobbies
                </span>{" "}
                ➡️
              </li>
              <li
                className="hover:cursor-pointer underline-offset-4"
                onClick={() => {
                  setEducation(false);
                  setHobbies(false);
                  setStrength(true);
                  setCertificates(false);
                }}
              >
                <span
                  style={{
                    textDecoration: strength ? "black wavy underline" : "",
                  }}
                >
                  Strength
                </span>{" "}
                ➡️
              </li>
              <li
                className="hover:cursor-pointer underline-offset-2"
                onClick={() => {
                  setEducation(false);
                  setHobbies(false);
                  setStrength(false);
                  setCertificates(true);
                }}
              >
                <span
                  style={{
                    textDecoration: certificates ? "black wavy underline" : "",
                  }}
                >
                  Certificates
                </span>{" "}
                ➡️
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-red-600 w-[90%] h-96 relative">
          <div
            id="education"
            className="w-full absolute left-[0%] border border-black"
            style={{ display: education ? "" : "none" }}
          >
            <table>
              <tbody>
                <tr>
                  <th>College/School</th>
                  <th>University/Board</th>
                  <th>Degree/Standard</th>
                  <th>Passing Year</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td>DAV CENTENARY COLLEGE </td>
                  <td>MDU UNIVERSITY</td>
                  <td>BCA</td>
                  <td>2023</td>
                  <td>67</td>
                </tr>
                <tr>
                  <td>DAV Public School</td>
                  <td>CBSE</td>
                  <td>
                    12<sup>th</sup>
                  </td>
                  <td>2020</td>
                  <td>74</td>
                </tr>
                <tr>
                  <td>DAV Public School</td>
                  <td>CBSE</td>
                  <td>
                    10 <sup>th</sup>
                  </td>
                  <td>2018</td>
                  <td>53.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            id="hobbies"
            className="w-full ml-20 "
            style={{ display: hobbies ? "" : "none" }}
          >
            <ul className="flex flex-wrap gap-y-5 flex-col list-disc">
              <li>Coding</li>
              <li>Gaining Financial Knowledge</li>
              <li>Reading books related to psychology</li>
              <li>Chilling with friends</li>
            </ul>
          </div>
          <div
            id="strength"
            className="w-full ml-20"
            style={{ display: strength ? "" : "none" }}
          >
            <ul className="flex flex-wrap gap-y-5 flex-col list-disc">
              <li>Problem Solving</li>
              <li>Creative</li>
              <li>Time Management</li>
              <li>Teamwork</li>
              <li>Adaptive</li>
            </ul>
          </div>
          <div
            id="certificates"
            className="w-full ml-20"
            style={{ display: certificates ? "" : "none" }}
          >
            <ul className="flex flex-wrap gap-y-5 flex-col list-disc">
              <li>Data Flair - Web Development using HTML, CSS, Javascript</li>
              <li>
                Gift Organisation - NSS(National Service Scheme) Certificate for
                organising the event for Thalassemia patients
              </li>
              <li>TCS iON Career Edge - Young Professional</li>
              <li>Udemy - Master Power Automate Desktop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
