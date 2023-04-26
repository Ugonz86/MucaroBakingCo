import React, { useState } from "react";
import "./App.css";
// import templogoowl from "./images/templogoowl.PNG";
// import tempTitle from "./images/tempTitle.PNG";
import tempLogo from "./images/tempLogo.png";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FlutterDash from "@mui/icons-material/FlutterDash";
import { Link } from "react-router-dom";
import logo3 from "./images/logo3.png";

function Header() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div className="Header">
      <div className="headerDiv">
        <Link to="/">
          <img src={tempLogo} className="App-logo" alt="logo" />
          {/* <FlutterDash className="flutter" /> */}
        </Link>
        {/* 
      <div className="headerTitle">
        <img src={tempTitle} className="App-title" alt="title" />
      </div> */}
        {/* <nav> */}
        <nav>
          <div className="Menu">
            <Link to="/popups">
              <h5>POP-UPS</h5>
            </Link>
            <Link to="/about">
              <h5>ABOUT</h5>
            </Link>
            <Link to="/contact">
              <h5>CONTACT</h5>
            </Link>
            <Link to="/faqs">
              <h5>FAQs</h5>
            </Link>
          </div>

          {/* <div className="nav-small">

      </div> */}

          {/* <div className="container-fluid mt-3"> */}
          <div className="nav-small">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md"> */}
            {/* <div className="container-fluid p-2"> */}
            {/* <a className="navbar-brand text-primary mr-0">Company Logo</a> */}
            {/* <div className="form-inline ml-auto"> */}
            {/* <div className="btn btn-primary" > */}
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={isOpen ? "long-menu" : undefined}
              aria-expanded={isOpen ? "true" : undefined}
              aria-haspopup="true"
              disableRipple
              onClick={ToggleSidebar}
              sx={{
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
              style={{
                color: "white",
                margin: "30px 0 30px",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: "5px",
              }}
            >
              <MoreVertIcon />
            </IconButton>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </nav> */}
            <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
              {/* <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-times">x</i>
            </div>
          </div> */}
              <div className="Menu2" onClick={ToggleSidebar}>
                {/* <Link to="/">
                <h5>HOME</h5>
              </Link> */}
                <Link to="/popups">
                  <h5>POP-UPS</h5>
                </Link>
                <Link to="/about">
                  <h5>ABOUT</h5>
                </Link>
                <Link to="/contact">
                  <h5>CONTACT</h5>
                </Link>
                <Link to="/faqs">
                  <h5>FAQs</h5>
                </Link>
                <hr
                  style={{
                    color: "white",
                    width: "50%",
                    outline: "none",
                    border: "solid .1px",
                  }}
                />
                <Link to="https://www.instagram.com/bakingjeva/">
                  <img
                    src={logo3}
                    className="insta-logo"
                    alt="instagram-logo"
                    style={{filter: 'invert()', margin: '40px'}}
                  />
                </Link>
              </div>
            </div>
            <div
              className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
              onClick={ToggleSidebar}
            ></div>
          </div>
          {/* </nav> */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
