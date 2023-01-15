import React from "react";
import img from "../../img/car.png";
import Button from "../Button/Button";
const CarLand = () => {
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
                href="https://the-car-land.web.app//"
              >
                <Button className="btn btn-primary">Live Site</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SumiAkter2/car-land"
              >
                <Button className="btn btn-primary ml-6">Code Link</Button>{" "}
              </a>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SumiAkter2/car-land-server"
            >
              <Button className="btn btn-primary ml-6">Server Link</Button>{" "}
            </a>
            <h1 className="text-5xl font-bold"> The Car Land</h1>
            <p className="py-6">
              This is a car inventory management site.Here I create some
              component likes products,blogs,login,sign out,etc. In this site I
              show my products .I use Mongodb Database and Railway.Here You can
              added car and Delete car.
            </p>
            <h3 className="text-3xl mb-6">Technology:</h3>
            <p>
              html, css, javascript, react, react bootstrap, fontAwesome, react
              route, react rechart, mongodb, Railway, firebase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLand;
