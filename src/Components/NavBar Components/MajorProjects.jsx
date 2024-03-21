import React from "react";
import Project_card from "../Project_card";

const MajorProjects = () => {
  return (
    <>
      <div>
        <ul
          id="all-projects"
          className=" w-full h-6/6 px-10 pt-5 overflow-y-auto flex flex-col gap-20 relative shadow-inner"
        >
          <li className="">
            <Project_card
              appName="Weather Application"
              tech="HTML 5 , Vanila CSS , Tailwind CSS , Javascript , React.js"
              desc="This Weather application is capable to show weather of any city in the entire world. This weather app will inform you about the live weather details like temp, wind speed, humidity for the city you searched. And with help of useMemo hook in react.js if the value in input value is same as previous then there'll be no api call. I got the endpoint for this api from openweathermap api."
              code="https://github.com/lakshay1906/Projects/tree/main/Weather-app"
              videoLink="./src/assets/Weather-app.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Password Generator Application"
              tech="HTML 5 , Vanila CSS , Javascript , React.js"
              desc="This Password Generator Application help to generate random password as per the user's choice. The user can choose the length of the password, user can also choose whether he/she wants to add number and capital letter in password."
              code="https://github.com/lakshay1906/Projects/tree/main/Password-Generator"
              videoLink="./src/assets/Password_generator.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="File Explorer Application"
              tech="HTML 5 , Vanila CSS , Javascript , React.js"
              desc="This File Explorer application show the full directory inside the root folder. And also allows the user to create file or folder inside any folder. This application also restricts the user to create folder of same name or create file of same name."
              code="https://github.com/lakshay1906/All-Practice-Code/tree/main/react/Machine%20Coding%20Questions/FileExplorer"
              videoLink="./src/assets/FileExplorer.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Stone Paper Scissor Game"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This Stone Paper Scissor game is a  very entertaining and pleasurable. And in this game you are playing against computer. You will also be able to see your live score board and that scores are not gonna change even if you refresh the page because I your score is stored in browser's local storage. The values in score board will change only when you reset your scores by yourself."
              code="https://github.com/lakshay1906/Projects/tree/main/Stone%2C%20Paper%2C%20Scissor%20Game"
              videoLink="./src/assets/SPS_Game.mp4"
            />
          </li>
          <li className="">
            <Project_card
              appName="Todo Application"
              tech="HTML 5 , Vanila CSS , Javascript "
              desc="This todo application can help you remember your daily routines and the tasks that you have to perform in future and you can also mark as complete and if you don't want a task you can delete a particular task."
              code="https://github.com/lakshay1906/Projects/tree/main/To%20Do%20Application"
              videoLink="./src/assets/Todo-App.mp4"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MajorProjects;
