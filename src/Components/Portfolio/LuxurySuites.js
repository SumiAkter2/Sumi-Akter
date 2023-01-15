import React from "react";
import img from "../../img/Luxury suites.png";
import Button from "../Button/Button";
const LuxurySuites = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div class="image-wrap ">
            <img src={img} alt="project-img" />
          </div>
          <div>
            <div className="lg:flex gap-x-6">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://luxury-suites-6b69b.web.app/"
              >
                <Button className="btn btn-primary">Live Site</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/Luxury-suites-client"
              >
                <Button className="btn btn-primary ml-6">Code Link</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/luxury-suites-server"
              >
                <Button className="btn btn-primary ml-6">Server Link</Button>
              </a>
            </div>
            <h1 className="text-5xl font-bold">LuxurySuites</h1>
            <p className="py-6">
              It's a digital coin site. Here user can see any types of coin.
              User can buy it and They can also convert bit coin to Dollar and
              Euro. Here user can log in and sign Up and sign out. They can
              payment .
            </p>
            <h3 className="text-3xl mb-6">Technology:</h3>
            <p>
              react react-datepicker react-dom react-firebase-hooks
              react-hook-form react-router-dom tailwind css daisy UI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxurySuites;
