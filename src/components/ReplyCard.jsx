import React, { useState } from "react";
import "./ReplyCard.css";
import myProfilePic from "../images/avatars/image-juliusomo.png";

const ReplyCard = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="reply-container">
      <div className="reply-comment">
        <img src={myProfilePic} alt="your profile" />
        <button onClick={toggleVisibility}>Reply</button>
      </div>
      {isVisible && (
        <div className="reply-area">
          <textarea>Add comment here...</textarea>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default ReplyCard;
