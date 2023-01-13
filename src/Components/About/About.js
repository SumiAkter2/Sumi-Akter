import React from "react";
import Button from "../Button/Button";
import { ImDownload3 } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";
import SkillsBar from "./SkillsBar";

const About = () => {
  return (
    <div className="px-6 w-3/4 ">
      <div className="pt-12">
        <small>VISIT MY PORTFOLIO & HIRE ME</small>
        <h1 className="text-secondary">About Me</h1>
        <p className="leading-normal">
          I am a Junior Web Developer. I am experienced in HTML5, CSS3,
          Bootstrap, Java script, React JS, Tailwind, Node JS and MongoDB. I
          have completed about 10+ projects using my skill in all programming
          knowledge. Some of my projects are Innovative agency, Best Tools
          Co,The Car Land an so on. The first two are Full stack website and the
          rest one is a Front End Website. Day by day I am trying to gain more
          skill in this sector with the best of mine. I am very much dedicated
          to my duty and want to developed a bright future in this sector. I
          have completed a Complete Web Development Course on Web Development
          from Programming Hero. After this course, I've achieved a Black Belt
          by scoring top 5% of the course. I love gardening, cooking and talking
          with people. During leisure time , I take care of my garden. I like to
          motivate people to lead a happy life. On holiday, I spend my time with
          my family.
        </p>
        <Button className="mb-6">
          <a
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw0hqLuk0XdavfAfgeU_l6v2&ust=1673695562998000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNidwP23xPwCFQAAAAAdAAAAABAE"
            download
            className="flex justify-center items-start"
          >
            <ImDownload3 className="mr-4 mt-2" /> Download Resume
          </a>
        </Button>
      </div>
      {/* ==================== */}
      <div className="py-12">
        <h3 className="text-3xl py-4">
          I'm {}
          <span style={{ color: "#06b6d4" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["SUMI AKTER", " WEB DEVELOPER"]}
              loop={20}
              cursor
              cursorStyle=" !"
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <div className="lg:flex justify-start items-center gap-x-5">
          <ul className="grid grid-cols-2 pb-12 gap-0 ">
            <li>First Name : </li>
            <li className="font-bold">Sumi</li>
            <li>Last Name :</li>
            <li className="font-bold"> Akter</li>
            <li>Age :</li>
            <li className="font-bold">23 years</li>
            <li>Nationality :</li>
            <li className="font-bold">Bangladeshi</li>
            <li>Languages :</li>
            <li className="font-bold"> English, Bengali, Hindi(spoken)</li>
            <li>Address:</li>
            <li className="font-bold">Dhaka, Bangladesh</li>
            <li>Freelance: </li>
            <li className="font-bold">Available</li>
                  </ul>
                  <div> 
                      <SkillsBar/>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default About;
