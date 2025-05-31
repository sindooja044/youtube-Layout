import React from "react";
import "./Navbar.css";
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
    <div className="main">
      <div className="left">
        <img className="img1" src={hamburgerMenu} alt="" />
        <img className="img2" src={youtubeLogo} alt="" />
      </div>
      <div className="mid">
        <input type="search" placeholder="search" />
        <img className="img1" src={search} alt="" />
        <img className="img2" src={voicesearchicon} alt="" />
      </div>
      <div className="end">
        <img className="img1" src={upload} />
        <img className="img2" src={youtubeapps} />
        <div class="notifications">
          <img className="img3" src={notifications} />
          <div className="three">3</div>
        </div>
        <img className="img4" src={profile} />
      </div>
    </div>
  );
};

export default Navbar;
