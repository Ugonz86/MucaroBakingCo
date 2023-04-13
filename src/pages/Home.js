import React from 'react';
import "../App.css";
// import InstaFeeds from "../components/InstaFeeds";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="Home">
      <div className="homeContainer">
        {/* <h1>Home</h1> */}
        <Carousel />
        {/* <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} /> */}
      </div>
    </div>
  );
}

export default Home;
