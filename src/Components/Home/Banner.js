import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import Button from "../Button/Button";
const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className=" ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            // links: {
            //   color: "#fff",
            //   distance: 140,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            collisions: {
              enable: true,
            },
            move: {
              directions: "bottom",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 8 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="flex justify-center items-center pt-24 ">
        <div className=" p-6 font-sans">
          <small>Hi, Welcome to my Portfolio</small>
          <h1>
            I'm {}
            <span style={{ color: "#06b6d4" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["SUMI AKTER", "A WEB DEVELOPER"]}
                loop={20}
                cursor
                cursorStyle=" !"
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl mt-4">
            Hi, I am Sumi Akter. A passionate junior web developer with
            marvelous skilled and working in this sector with high reputation. I
            can provide clean code and pixel perfect design. I also make website
            more & more interactive with web animations.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
