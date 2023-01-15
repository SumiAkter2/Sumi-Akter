import React from "react";
import img from "../../img/inilabs.png";
import Button from "../Button/Button";
const IniLabs = () => {
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
                href="https://inilabs-school.web.app/"
              >
                <Button className="btn btn-primary">Live Site</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/inilabs-school"
              >
                <Button className="btn btn-primary ml-6">Code Link</Button>{" "}
              </a>
            </div>
            <h1 className="text-5xl font-bold">IniLabs School</h1>
            <p className="py-6">
              Create a home page, Added a banner section, Added different type
              of section, Added a footer.
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

export default IniLabs;
