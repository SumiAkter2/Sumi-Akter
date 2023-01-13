import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
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
                distance: 100,
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
      <div className="fixed top-5 left-20 ">
        <div className="flex justify-around items-center gap-x-6 ">
          <a
            href="https://www.facebook.com/alishaakhtersumi.sumi"
            className="hover:text-sky-500"
          >
            <FaFacebookF size="25px" />
          </a>
          <a
            href="https://www.linkedin.com/in/thesumiakter/"
            className="hover:text-sky-500"
          >
            <GrLinkedinOption size="25px" />
          </a>
          <AiOutlineTwitter size="25px" className="hover:text-sky-500" />

          {/* <a href="">
            <IoMdMail size="25px" />
          </a> */}
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className=" p-6 font-sans">
          <small>Hi, Welcome to my Portfolio</small>
          <h1>
            I'm {}
            <span style={{ color: "#06b6d4" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["SUMI AKTER", "A WEB DEVELOPER"]}
                loop={10}
                cursor
                cursorStyle=" !"
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl mt-4">
            I am a Junior Web Developer. I am experienced in HTML5, CSS3,
            Bootstrap, Java script, Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eos inventore unde, quisquam soluta perferendis
            quasi placeat id corporis sunt itaque enim minima iure, eaque sit
            eius! Quaerat voluptatibus ex odit!
          </p>
          <button className="mt-12">
            <span>Button</span>
            <div class="top"></div>
            <div class="left"></div>
            <div class="bottom"></div>
            <div class="right"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
