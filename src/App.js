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
function App() {
  return (
    <div className="App home-header">
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
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* </Navbar> */}
      <div>
        <ul className="fixed top-20 right-0 menu p-6 w-44 bg-secondary text-white rounded-md text-sm ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink className="mt-4" to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="mt-4" to="/about">
              <HiInformationCircle />
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="mt-4" to="/portfolio">
              <MdWork /> Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="mt-4" to="/contact">
              <MdContactPhone /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
