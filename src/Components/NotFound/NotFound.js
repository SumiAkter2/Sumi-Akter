import React from "react";
import bg from "../../img/bg6.jpg";
import sad from "../../img/sad emoji.png";
const NotFound = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black opacity-75  font-bold">
        <h1 className="text-5xl text-center text-white pt-12">
          OOOppss!! You lost your road
        </h1>
        <p className="text-xl text-center text-white py-4">Please go Home</p>
        <div className="flex justify-center items-center py-12">
          <img src={sad} alt="sad-emoji" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
