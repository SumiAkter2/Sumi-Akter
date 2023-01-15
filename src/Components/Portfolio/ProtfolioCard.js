import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { BsImageFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const PortfolioCard = ({ p }) => {
  const navigate = useNavigate();
  const handle = (id) => {
    // navigate(`/${id}`);
    console.log("handle");
  };
  return (
    <div className="">
      <div className="containers" key={p.id} p={p}>
        <img src={p.imgSort} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text" onClick={() => handle(p.id)}>
            <Button>
              <label
                htmlFor="my-modal-5"
                className=" flex justify-center items-center after:btn-transparent"
              >
                <BsImageFill className="mr-4" /> <BiLinkExternal />
              </label>
            </Button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal text-black">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{p.id}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
