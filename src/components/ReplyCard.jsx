import React from "react";
import "./ReplyCard.css";
import myProfilePic from "../images/avatars/image-juliusomo.png";

const ReplyCard = ({ onReplySubmit, onReplyChange, replyContent }) => {
  const handleSubmit = () => {
    onReplySubmit();
  };

  return (
    <div className="reply-container">
      <div className="reply-comment">
        <img src={myProfilePic} alt="your profile" />
        <button onClick={handleSubmit}>Reply</button>
      </div>
      <div className="reply-area">
        <textarea
          value={replyContent}
          onChange={onReplyChange}
          placeholder="Add comment here..."
        />
      </div>
    </div>
  );
};

export default ReplyCard;
