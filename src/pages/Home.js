import React from "react";
import "../App.css";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="Home">
      <div className="homeContainer">
        <p className="title">COMING SOON</p>
        <Carousel />
        <p className="homeInfo">Múcaro Baking Co. will be a pop-up-based bakery offering scrumdiddlyumptious treats for humans (and dogs!) in Seattle. Soon, you will be able to brighten your day with delicious cookies (or biscuits, if you are from across the pond or are a big fan of GBBO), can't-have-enough bars, decadent cakes, nommy nom-nom cupcakes, naked cupcakes (a.k.a. yummy muffins), heavenly buns, and so much more. </p>
      </div>
    </div>
  );
}

export default Home;
