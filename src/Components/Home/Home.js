import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner";
import "./Home.css";
const Home = ({ children }) => {
  
  return (
    <div>
      <Banner/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
