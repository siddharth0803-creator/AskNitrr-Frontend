import React from "react";
import "./css/WidgetContent.css";
import HelloImage from "./images/Hello.jpg";

const WidgetContent=()=> {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src={HelloImage}
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Hello College Mates</h5>
          <p>One stop solution for all your problems</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
