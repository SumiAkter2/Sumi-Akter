import React from "react";
import Button from "../Button/Button";
import img from "../../img/blackfit.png";
const BlackFit = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div class="image-wrap ">
            <a href="https://rahmanzeb.com">
              <img src={img} alt="project-img" />
            </a>
          </div>
          <div>
            <div className="lg:flex gap-x-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://blackfit.vercel.app/"
              >
                <Button className="btn btn-primary">Live Site</Button>{" "}
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/blackfit"
              >
                <Button className="btn btn-primary ml-6">Code Link</Button>
              </a>
            </div>
            <h1 className="text-5xl font-bold">BlackFit</h1>
            <p className="py-6">
              Keep healthy and fit. It's and Gym based site.{" "}
            </p>
            <h3 className="text-3xl mb-6">Technology:</h3>
            <p>
              Use React Js, Tailwind css Daisy UI React Icon React Counter React
              Modal Video React Router Dom React Loader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFit;
