import React from "react";
import img1 from "../../img/Screenshot_23.png";
import img2 from "../../img/Screenshot_19.png";
import img3 from "../../img/Screenshot_24.png";
import { BsImageFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./Portfolio.css";
import Button from "../Button/Button";
const Portfolio = () => {
  return (
    <div className="w-10/12">
      <h1 className="text-center py-6">MY WORKS</h1>
      {/* <div class="image-wrap">
        <a href="https://rahmanzeb.com">
          <img src={img1} />
        </a>
      </div> */}
      <div className="grid grid-cols-3 gap-4 px-4">
        <div class="containers">
          <img src={img1} alt="Avatar" class="image" />
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
          <img src={img2} alt="Avatar" class="image" />
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
          <img src={img3} alt="Avatar" class="image" />
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
          <img src={img1} alt="Avatar" class="image" />
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
          <img src={img2} alt="Avatar" class="image" />
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
          <img src={img3} alt="Avatar" class="image" />
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
          <img src={img1} alt="Avatar" class="image" />
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
          <img src={img2} alt="Avatar" class="image" />
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
          <img src={img3} alt="Avatar" class="image" />
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
          <img src={img1} alt="Avatar" class="image" />
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
          <img src={img2} alt="Avatar" class="image" />
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
          <img src={img3} alt="Avatar" class="image" />
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
          <img src={img1} alt="Avatar" class="image" />
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
          <img src={img2} alt="Avatar" class="image" />
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
          <img src={img3} alt="Avatar" class="image" />
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
