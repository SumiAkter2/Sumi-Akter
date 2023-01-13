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
    <div className="App  home-header">
      {/* <Navbar> */}
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
