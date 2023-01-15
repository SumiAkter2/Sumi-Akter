import React from "react";
import "./Experience.css";

const ExperienceCard = () => {
  return (
    <div className="m-12 bg-black p-12 rounded-md">
      <div className="lg:flex justify-center items-center gap-x-6 py-12">
        <div class="boxes  my-20 lg:my-0">
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                20+ <br />
              </span>{" "}
              Projects Complete
            </h2>
          </div>
        </div>
        <div class="boxes  my-20 lg:my-0">
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                Good <br />{" "}
              </span>{" "}
              Communication Skill
            </h2>
          </div>
        </div>
        <div class="boxes  my-20 lg:my-0">
          <div class="content text-center">
            <h2>
              <span className="text-3xl font-bold">
                100% <br />
              </span>{" "}
              Client Satisfaction
            </h2>
          </div>
        </div>
        <div class="boxes  my-20 lg:my-0">
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
