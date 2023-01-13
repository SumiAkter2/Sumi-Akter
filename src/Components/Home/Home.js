import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={30}
        outerSize={40}
        color="white"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          border: "3px solid white",
        }}
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        officia nesciunt optio labore unde numquam pariatur ratione! Iure
        adipisci modi asperiores labore vero repellat odio sapiente facere!
        Vitae, provident beatae.
      </p>
      <button className="btn btn-secondary">dddd</button>
    </div>
  );
};

export default Home;
