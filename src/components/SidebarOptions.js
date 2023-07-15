import { Add } from "@mui/icons-material";
import React from "react";
import './css/SidebarOptions.css';

// Import the images
import historyImage from "./images/history.jpg";
import businessImage from "./images/business.jpg";
import psychologyImage from "./images/Psychology.jpg";
import cookingImage from "./images/Cooking.jpg";
import musicImage from "./images/Music.jpg";
import scienceImage from "./images/Science.jpg";
import healthImage from "./images/Health.jpg";
import moviesImage from "./images/Movies.jpg";
import technologyImage from "./images/Technology.jpg";
import educationImage from "./images/Education.jpg";

const SidebarOptions=() => {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img src={historyImage} alt="" />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img src={businessImage} alt="" />
        <p>Business</p>
      </div>
      
      <div className="sidebarOption">
        <img src={psychologyImage} alt="" />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img src={cookingImage} alt="" />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img src={musicImage} alt="" />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img src={scienceImage} alt="" />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img src={healthImage} alt="" />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img src={moviesImage} alt="" />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img src={technologyImage} alt="" />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img src={educationImage} alt="" />
        <p>Education</p>
      </div>

      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
