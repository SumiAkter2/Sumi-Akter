import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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
                type: "star",
              },
              size: {
                value: { min: 2, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <h1>
          dfsaljldksf Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione placeat reprehenderit vitae ducimus iusto? Harum neque
          laudantium necessitatibus sunt atque consectetur! Voluptatum saepe
          expedita rerum recusandae. Aliquid aperiam cupiditate rerum?
        </h1>
      </div>
    );
};

export default Banner;