import React from "react";
import "./Experience.css";
import AOS from "aos";
const ExperienceCard = () => {
  AOS.init();
  return (
    <div className="m-6 bg-black p-12 rounded-md">
      <div className="lg:flex justify-center items-center gap-x-6 py-12">
        <div
          class="boxes  my-20 lg:my-0 mx-auto"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                20+ <br />
              </span>
              Projects Complete
            </h2>
          </div>
        </div>
        <div
          class="boxes  my-20 lg:my-0 mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                Good <br />{" "}
              </span>{" "}
              Communication Skill
            </h2>
          </div>
        </div>
        <div
          class="boxes  my-20 lg:my-0 mx-auto"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                100% <br />
              </span>{" "}
              Client Satisfaction
            </h2>
          </div>
        </div>
        <div
          class="boxes  my-20 lg:my-0 mx-auto"
          data-aos="fade-left"
          data-aos-delay="900"
        >
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                2+ <br />{" "}
              </span>{" "}
              Years Experience
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
