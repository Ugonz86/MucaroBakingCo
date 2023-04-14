import React from "react";
import "../App.css";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="Home">
      <div className="homeContainer">
        <Carousel />
        <h1 style={{ color: "#004c6d" }}>Coming Soon!</h1>
      </div>
      
    </div>
  );
}

export default Home;
