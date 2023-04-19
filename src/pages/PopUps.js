import React from "react";
import "../App.css";

function PopUps() {
  return (
    <div className="PopUps">
      <div className="popUpsContainer">
        <h3 className="title">COMING SOON</h3>
        <h4 style={{ color: "#004c6d" }}>
          Follow{" "}
          <a className="instalink" href="https://www.instagram.com/bakingjeva/">
            @MucaroBakingCo
          </a>{" "}
          on Instagram to stay up to date with what's coming out the oven!
        </h4>
      </div>
    </div>
  );
}

export default PopUps;
