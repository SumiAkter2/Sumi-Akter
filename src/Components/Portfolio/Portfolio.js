import React, { useEffect, useState } from "react";
import img1 from "../../img/Crypto sort.png";
import img2 from "../../img/BlackFit Sort.png";
import img3 from "../../img/BD Garage sort.png";
import img4 from "../../img/Best Tools Sort.png";
import img5 from "../../img/luxury sort.png";
import img6 from "../../img/Innovative sort.png";
import img7 from "../../img/inlab-sort.png";
import img8 from "../../img/Doctors sort.png";
import img9 from "../../img/Penguin sort.png";
import img10 from "../../img/Bangladesh sort.png";
import img11 from "../../img/Green Nature sort.png";
import img12 from "../../img/Beauty sort.png";
import img13 from "../../img/Phone sort.png";
import img14 from "../../img/Calc sort.png";
import img15 from "../../img/car-sort.png";
import { BsImageFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./Portfolio.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-center py-6 text-5xl text-white mb-12">MY WORKS</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 px-4 pb-24">
        <div class="containers">
          <img src={img1} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
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
        <div class="containers">
          <img src={img2} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
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
        <div class="containers">
          <img src={img5} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/luxurySuites">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img4} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/bestTools">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img3} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/bdGarage">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img6} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/innovative">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img7} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/iniLabs">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img15} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <NavLink to="/carLand">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img8} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img9} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img10} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img11} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img12} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img13} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="containers">
          <img src={img14} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">
              <a href="">
                <Button>
                  <p className="flex justify-center items-center">
                    <BsImageFill className="mr-4" /> <BiLinkExternal />
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =================== */}
    </div>
  );
};

export default Portfolio;
