import React from "react";
import Heading from "../MinorComponents/Heading";
import { GiCheckMark } from "react-icons/gi";

const Card = ({
  divClass,
  eleClass,
  logo,
  logoTitle,
  logoWidth,
  collegeName,
  degreeName,
  duration,
  info,
}) => {
  return (
    <>
      <div
        id={eleClass}
        className={`w-[95%] ${divClass} px-3 border border-white rounded-xl py-3 hover:scale-105 transition-all res-card`}
      >
        <div className="flex gap-x-2">
          <img
            src={logo}
            alt={logoTitle}
            className={`rounded-lg ${logoWidth}`}
          />
          <div className="flex flex-col gap-y-1">
            <h1 className="font-semibold text-xl top-32">{collegeName}</h1>
            <div>
              <p>{degreeName}</p>
              <p>{duration}</p>
            </div>
          </div>
        </div>
        <div className="mt-2">{info}</div>
      </div>
    </>
  );
};

const SeperatorCircle = ({ styleClass }) => {
  return (
    <>
      <div
        className={`w-10 h-10 p-[6px] rounded-full bg-white absolute -right-[1.15rem] ${styleClass}`}
      >
        <div className="bg-green-700 rounded-full w-full h-full flex justify-center items-center">
          <GiCheckMark color="white" size={"1.3rem"} />
        </div>
      </div>
    </>
  );
};

function Education() {
  return (
    <>
      <div className="max-w-full mb-10">
        <Heading text={"Education"} />
        <div className="w-[80%] h-full justify-center items-center mx-auto relative edu-grid">
          <Card
            divClass={"justify-self-start hover:-translate-x-5"}
            eleClass={"internship"}
            logo={"https://softsynthsoftware.com/assets/images/whitelogo.png"}
            logoTitle={"Company Logo"}
            logoWidth={"w-36 py-2 px-1 bg-black "}
            collegeName={"Softsynth Software Solutions, Sector-9 Faridabad"}
            degreeName={"React Web Development"}
            duration={"October 2023 - April 2024"}
            info={
              "Following my graduation, I eagerly embraced a new chapter in October 2023, enrolling in a prestigious training program offered by Softsynth Software Solution Co. in Sector 9, Faridabad. Focused on becoming a proficient React Web Developer, I immersed myself in mastering HTML, CSS, JavaScript, and React. Successfully completing my internship in March 2024, I emerged equipped with cutting-edge skills and practical experience, poised to make a significant impact in the dynamic world of web development."
            }
          />
          <Card
            divClass={"justify-self-end hover:translate-x-5"}
            eleClass={"graduation"}
            logo={
              "https://www.allschoolscolleges.com/images/college_logo/391463057690.png"
            }
            logoTitle={"College Logo"}
            logoWidth={"h-32 py-1 bg-white"}
            collegeName={"DAV Centenary College, NIT Faridabad"}
            degreeName={"BCA : Bachlor of Computer Application"}
            duration={"September 2020 - August 2023"}
            info={
              "Enrolling at DAV Centenary College for my BCA degree back in September 2020 marked the beginning of an incredible journey. Under the affiliation of Maharishi Dayanand University, Rohtak, I delved into a myriad of subjects, from programming languages like C, C++, and Java to essential concepts like DSA and HTML, MySQL. Engaging in co-curricular activities and being an active member of the NSS department enriched my college experience. Beyond academics, I honed invaluable soft skills, including problem-solving, time management, teamwork, decision-making, and critical thinking. In August 2023, I proudly completed my BCA degree with a commendable aggregate score of 67%."
            }
          />
          <div
            id="seperator"
            className="bg-[#070836] w-1 h-full mx-2 absolute justify-self-center rounded-xl"
          >
            <SeperatorCircle styleClass={"top-52 first-sep"} />
            <SeperatorCircle styleClass={"top-[44rem] second-sep"} />
            <SeperatorCircle styleClass={"top-[72rem] third-sep"} />
            <SeperatorCircle styleClass={"top-[103rem] fourth-sep"} />
          </div>
          <Card
            divClass={"justify-self-start hover:-translate-x-5"}
            eleClass={"twelfth-class"}
            logo={
              "https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-1/301661059_413174110912143_2089272977160406831_n.png?stp=c0.0.180.180a_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N7yn9ntr11oQ7kNvgFUM9Cj&_nc_ht=scontent.fdel27-4.fna&oh=00_AfAp6z7_woFUu2eYn0Iu0F_3LWky3CeZTYGuvMB5atPykw&oe=6638F943"
            }
            logoTitle={"School Logo"}
            logoWidth={"w-32 px-1 py-1 "}
            collegeName={"DAV Public School, Palwal Haryana"}
            degreeName={"12th: Commerce Stream"}
            duration={"April 2019 - March 2020"}
            info={
              "In April 2019, I embarked on my journey at DAV Public School, Palwal, thrilled to be part of its esteemed reputation. Opting for the commerce stream, subjects like Accountancy, Economics, and Business Studies became my passion. Throughout my 12th year, I actively engaged in various co-curricular activities, relishing every moment, including the vibrant annual function. As March 2020 approached, I emerged triumphant, securing an impressive aggregate score of 74% in my 12th-grade exams, just before the onset of the COVID-19 pandemic."
            }
          />
          <Card
            divClass={"justify-self-end hover:translate-x-5"}
            eleClass={"tenth-class"}
            logo={
              "https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-1/301661059_413174110912143_2089272977160406831_n.png?stp=c0.0.180.180a_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N7yn9ntr11oQ7kNvgFUM9Cj&_nc_ht=scontent.fdel27-4.fna&oh=00_AfAp6z7_woFUu2eYn0Iu0F_3LWky3CeZTYGuvMB5atPykw&oe=6638F943"
            }
            logoTitle={"School Logo"}
            logoWidth={"w-32 px-1 py-1 "}
            collegeName={"DAV Public School, Palwal Haryana"}
            degreeName={"Matriculation"}
            duration={"April 2017 - March 2018"}
            info={
              "In April 2017, my journey at DAV Public School, Palwal began, filled with excitement to be part of its esteemed reputation. Alongside the core subjects of English, Hindi, Mathematics, Social Science, and Science, I eagerly immersed myself in diverse co-curricular activities, cherishing every moment, particularly the vibrant annual functions. As March 2018 approached, I proudly emerged triumphant, achieving an impressive aggregate score of 53.8% in my 10th-grade exams, marking a significant milestone in my academic journey."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Education;
