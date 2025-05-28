import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.svg";
import explore from "../../assets/explore.svg";
import subscriptions from "../../assets/subscriptions.svg";
import originals from "../../assets/originals.svg";
import youtubeMusic from "../../assets/youtube-music.svg";
import library from "../../assets/library.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home">
        <img src={home} alt="" />
        <p>Home</p>
      </div>
      <div className="home">
        <img src={explore} alt="" />
        <p> explore</p>
      </div>
      <div className="home">
        <img src={subscriptions} alt="" />
        <p> subscriptions1</p>
      </div>
      <div className="home">
        <img src={originals} alt="" />
        <p> originals1</p>
      </div>
      <div className="home">
        <img src={youtubeMusic} alt="" />
        <p> music</p>{" "}
      </div>
      <div className="home">
        <img src={library} alt="" />
        <p> library</p>
      </div>
    </div>
  );
};

export default Sidebar;
