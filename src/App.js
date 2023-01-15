import AnimatedCursor from "react-animated-cursor";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Banner from "./Components/Home/Banner";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";
import Crypto from "./Components/Portfolio/Crypto";
import BlackFit from "./Components/Portfolio/BlackFit";
import LuxurySuites from "./Components/Portfolio/LuxurySuites";
import BestTools from "./Components/Portfolio/BestTools";
import BdGarage from "./Components/Portfolio/BdGarage";
import Innovative from "./Components/Portfolio/Innovative";
import IniLabs from "./Components/Portfolio/IniLabs";
import CarLand from "./Components/Portfolio/CarLand";

function App() {
  return (
    <div className=" App">
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="white"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        innerStyle={{
          background: " #06b6d4",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/crypto" element={<Crypto />}></Route>
        <Route path="/luxurySuites" element={<LuxurySuites />}></Route>
        <Route path="/blackFit" element={<BlackFit />}></Route>
        <Route path="/bestTools" element={<BestTools />}></Route>
        <Route path="/bdGarage" element={<BdGarage />}></Route>
        <Route path="/innovative" element={<Innovative />}></Route>
        <Route path="/iniLabs" element={<IniLabs />}></Route>
        <Route path="/carLand" element={<CarLand />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <div className="block fixed top-20 right-0 ">
        <ul className="m-1 p-2 menu  w-16 bg-secondary  rounded-md text-white  text-sm ">
          <li>
            <NavLink to="/" className="rounded-md ">
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-md mt-2" to="/about">
              <HiInformationCircle />
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-md mt-2" to="/portfolio">
              <MdWork />
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-md mt-2" to="/contact">
              <MdContactPhone />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
