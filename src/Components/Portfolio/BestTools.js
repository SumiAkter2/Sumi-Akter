import React from "react";
import img from "../../img/Best Tools.png";
import Button from "../Button/Button";
const BestTools = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div class="image-wrap ">
            <img src={img} alt="project-img" />
          </div>
          <div className="w-4/5 py-6">
            <div className="lg:flex gap-x-6">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cryptovest-bd334.web.app/"
              >
                <Button className="btn btn-primary">Live Site</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/best-tools-clients"
              >
                <Button className="btn btn-primary ml-6">Code Link</Button>{" "}
              </a>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SumiAkter2/best-tools-server"
            >
              <Button className="btn btn-primary ml-6">Server Link</Button>{" "}
            </a>
            <h1 className="text-5xl font-bold">Best Tools co</h1>
            <p className="py-6">
              A complete online tools manufacturing site including Admin panel
              which is made by React.Js with Material UI. Buy different type
              watches and search by category. User can check their Buying
              information. User can give reviews and it will also display on
              homepage. And there also add firebase Authentication. Only admin
              can make another user admin and it will also verified by JWT (Json
              Web Token) Admin can control buying information,change status
              about buying ,also can add more product. To check ADMIN PANEL use
              1. email:admin@gmail.com 2. password: 123456
            </p>
            <h3 className="text-3xl mb-6">Technology:</h3>
            <p>
              react, react router, react hook forms react query firebase aos
              mongodb atlas firebase hook html css daisy ui react spinner react
              toastify jwt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTools;
