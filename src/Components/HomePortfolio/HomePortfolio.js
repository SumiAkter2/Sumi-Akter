import React from "react";
import img1 from "../../img/Crypto sort.png";
import img2 from "../../img/BlackFit Sort.png";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { BsImageFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const HomePortfolio = () => {
  return (
    <div>
      <div>
        <h1 className="text-center py-6 text-5xl font-bold text-secondary  mb-12">
          Latest Projects
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 px-4 ">
          <div className="containers">
            <img src={img1} alt="Avatar" className="image rounded-md" />
            <div className="overlay">
              <div className="text">
                <NavLink to="/Crypto">
                  <Button>
                    <p className="flex justify-center items-center">
                      <BsImageFill className="mr-4" /> <BiLinkExternal />
                    </p>
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="containers">
            <img src={img2} alt="Avatar" className="image rounded-md" />
            <div className="overlay">
              <div className="text">
                <NavLink to="/blackFit">
                  <Button>
                    <p className="flex justify-center items-center">
                      <BsImageFill className="mr-4" /> <BiLinkExternal />
                    </p>
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
        <NavLink to="/portfolio">
          <Button>See More Projects</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePortfolio;
