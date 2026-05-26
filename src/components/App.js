import React from "react";
import "../styles/App.css";

const projects = [
  {
    name: "AI Travel Planner",
    description: "An application that creates personalized travel itineraries using AI."
  },
  {
    name: "Smart Farming System",
    description: "A platform that helps farmers monitor crops and improve yield."
  },
  {
    name: "E-Commerce Website",
    description: "An online shopping platform with product search and secure payments."
  }
];

const App = () => {
  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default App; 