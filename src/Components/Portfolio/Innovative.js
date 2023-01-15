import React from "react";
import img from "../../img/Innovative sort.png";
import Button from "../Button/Button";
const Innovative = () => {
  return (
    <div>
      <div className="hero min-h-screen text-white ">
        <div className="hero-content flex-col lg:flex-row">
          <div class="image-wrap ">
            <a href="https://rahmanzeb.com">
              <img src={img} alt="project-img" />
            </a>
          </div>
          <div>
            <div className="lg:flex gap-x-6">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://innovative-agency-43eb0.web.app/"
              >
                <Button className="btn btn-primary">Live Site</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/innovative-agency-clients"
                
              >
                <Button className="btn btn-primary">Code Link</Button>{" "}
              </a>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SumiAkter2/innovative-agency-server"
            >
              <Button className="btn btn-primary">Server Link</Button>{" "}
            </a>
            <h1 className="text-5xl font-bold">InnovativeVest</h1>
            <p className="py-6">
              It's a digital coin site. Here user can see any types of coin.
              User can buy it and They can also convert bit coin to Dollar and
              Euro. Here user can log in and sign Up and sign out. They can
              payment .
            </p>
            <h3 className="text-3xl mb-6">Technology:</h3>
            <p>
              - Html, - Css, -Tailwind, - React - Daisy UI - React icon - React
              router
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovative;
