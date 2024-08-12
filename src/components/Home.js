import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // Define the style object outside of the return statement
  const style = { color: "firebrick" };

  return (
    <div id="home" className="home">
      <h1 style={style}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}

export default Home;
