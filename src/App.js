import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Banner from "./Components/Home/Banner";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar>
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
