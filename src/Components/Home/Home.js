import React from "react";
import About from "../About/About";
import ExperienceCard from "../Card/ExperienceCard";
import Contact from "../Contact/Contact";
import HomePortfolio from "../HomePortfolio/HomePortfolio";
import HtmlSlide from "../HtmlSlide/HtmlSlide";
import Performance from "../Performance/Performance";
import Slider from "../Slider/Slider";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <HtmlSlide></HtmlSlide>
      <ExperienceCard />
      <Slider />
      <Performance />
      <HomePortfolio />
      <Contact />
    </div>
  );
};

export default Home;
