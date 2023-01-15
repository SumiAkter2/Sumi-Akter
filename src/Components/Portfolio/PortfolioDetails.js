import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Project from "./Project";

const PortfolioDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch(`Project.json`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log("user",project);
  return (
      <div>
         <h1>{id } Name: {project.Name} </h1>
      {project.map((p) => (
      <Project key={p.id} p={p}></Project>
      ))}
    </div>
  );
};

export default PortfolioDetails;
