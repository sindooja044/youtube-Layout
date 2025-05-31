import React from "react";
import "./Navbar2.css";
import hamburgerMenu from "../../assets/hamburger-menu.svg";
import youtubeLogo from "../../assets/youtube-logo.svg";
import search from "../../assets/search.svg";
import voicesearchicon from "../../assets/voice-search-icon.svg";
import profile from "../../assets/profile.jpg";
import notifications from "../../assets/notifications.svg";
import youtubeapps from "../../assets/youtube-apps.svg";
import upload from "../../assets/upload.svg";

const Navbar = () => {
  return (
    <div className="navbar-container container-fluid bg-light fixed-top py-2">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-4 col-md-2 d-flex align-items-center">
          <img className="img1 me-2" src={hamburgerMenu} alt="menu" />
          <img className="img2" src={youtubeLogo} alt="logo" />
        </div>

        {/* Middle Section */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-2 mt-md-0">
          <input
            type="search"
            className="form-control me-2 w-75"
            placeholder="Search"
          />
          <img className="img1 me-2" src={search} alt="search" />
          <img className="img2" src={voicesearchicon} alt="voice" />
        </div>

        {/* Right Section */}
        <div className="col-8 col-md-4 d-flex justify-content-end align-items-center mt-2 mt-md-0">
          <img className="img1 me-2" src={upload} alt="upload" />
          <img className="img2 me-2" src={youtubeapps} alt="apps" />
          <div className="notifications position-relative me-2">
            <img className="img3" src={notifications} alt="notifications" />
            <div className="three">3</div>
          </div>
          <img className="img4" src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
