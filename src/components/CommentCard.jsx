import React from "react";
import profilePicAmy from "../images/avatars/image-amyrobson.png";
import ButtonCard from "./ButtonCard";
import "./CommentCard.css";
const CommentCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="post-comment">
          <div className="comment-card">
            <div className="comment-likes">
              <ButtonCard />
            </div>
            <div className="comment-content">
              <img src={profilePicAmy} alt="poster" />
              <p>fetch JSON data here for comment</p>
            </div>
          </div>
          <div className="reply-comment">
            <img src="" alt="your profile" />
            <textarea className="reply-area">add comment here...</textarea>
            <button className="reply-button">REPLY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
