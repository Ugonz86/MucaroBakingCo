import React from "react";
import "../App.css";

function PopUps() {
  return (
    <div className="PopUps">
      <div className="popUpsContainer">
        <h3 className="title">COMING SOON</h3>
        <p className="popUpsInfo">
          Follow{" "}
          <a className="instalink" href="https://www.instagram.com/bakingjeva/">
            @MucaroBakingCo
          </a>{" "}
          on Instagram to stay up to date with what's coming out the oven!
        </p>
      </div>
    </div>
  );
}

export default PopUps;
