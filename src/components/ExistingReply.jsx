import React from "react";
import Ramsesmiron from "../images/avatars/image-ramsesmiron.png";
import ButtonCard from "./ButtonCard";
import ReplyArrow from "../images/icon-reply.svg";
import "./ExistingReply.css";

const ExistingReply = () => {
  return (
    <div>
      <div className="existing-replies">
        <div className="first-existing-comment">
          <div className="existing-button">
            <ButtonCard />
          </div>
          <div className="existing-content">
            <img src={Ramsesmiron} alt="profile" />
            <title></title>
            <img src={ReplyArrow} alt="reply-arrow" />
            <p></p>
          </div>
        </div>
        <div className="second-existing-comment"></div>
      </div>
    </div>
  );
};

export default ExistingReply;
