import React from "react";
import { name, city, image } from "../data/data";  // Ensure this path is correct

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>My name is {name} and I'm from {city}.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
