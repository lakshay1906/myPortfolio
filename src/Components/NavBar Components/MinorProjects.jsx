import React from "react";
import Project_card from "../Project_card";

const MinorProjects = () => {
  return (
    <>
      <div>
        <ul
          id="all-projects"
          className=" w-[80%] mb-10 px-10 pt-5 flex flex-col gap-20 shadow-inner ml-[30rem]"
        >
          <li className="">
            <Project_card
              appName="Stopwatch Application"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This Stopwatch application works exactly same as a normal stopwatch that gives you functionalities like Start, Stop, Reset."
              code="https://github.com/lakshay1906/Projects/tree/main/Stopwatch"
              videoLink="./assets/Stopwatch.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Tell Me a Joke"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This Tell Me a Joke Application tell us a new joke when we click on next button. When we click on next button it hits an api that gives me another joke everytime. I have fetched the api endpoint from rapid api."
              code="https://github.com/lakshay1906/Projects/tree/main/Tell%20Me%20a%20Joke"
              videoLink="./assets/Tell_me_a_joke.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="QR Code Generator"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This QR Code Generator application is very useful you can create qr code of any link or text. After generating qr code you can scan the qr code to get the expected results"
              code="https://github.com/lakshay1906/Projects/tree/main/QR%20Code%20Generator"
              videoLink="./assets/QR_Code.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Movie Cards"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This Movie Card Application generates another card dynamically and display the card after we finish fill all the prompt questions. "
              code="https://github.com/lakshay1906/Projects/tree/main/Movie_card"
              videoLink="./assets/Movie_cards.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Calculator"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This QR Code Generator application is very useful you can create qr code of any link or text. After generating qr code you can scan the qr code to get the expected results"
              code="https://github.com/lakshay1906/Projects/tree/main/Calculator"
              videoLink="./assets/Calculator.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Clone of Neftlix.com"
              tech="HTML 5 , Vanila CSS"
              desc="This is the netflix clone in which I have tried to clone the Netflix.com with the help of HTML and Vanila CSS"
              code="https://github.com/lakshay1906/Projects/tree/main/Netflix.com"
              videoLink="./assets/Netflix.com.mp4"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MinorProjects;
