import React from "react";
import "./ReplyCard.css";
import myProfilePic from "../images/avatars/image-juliusomo.png";

const ReplyCard = () => {
  return (
    <div>
      <div className="reply-comment">
        <img src={myProfilePic} alt="your profile" />
        <textarea className="reply-area">Add comment here...</textarea>
        <button className="reply-button">REPLY</button>
      </div>
    </div>
  );
};
export default ReplyCard;
