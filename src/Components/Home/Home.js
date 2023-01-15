import React from "react";
import About from "../About/About";
import ExperienceCard from "../Card/ExperienceCard";
import Contact from "../Contact/Contact";
import Slider from "../Slider/Slider";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ExperienceCard/>
      <Slider />
      <Contact />
    </div>
  );
};

export default Home;
