import React, { useEffect, useState } from "react";
import Ramsesmiron from "../images/avatars/image-ramsesmiron.png";
import ButtonCard from "./ButtonCard";
import ReplyArrow from "../images/icon-reply.svg";
import dataInfo from "../data.json";
import "./ExistingReply.css";

const ExistingReply = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(dataInfo);
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const commentId = 3;
  const secondComment = jsonData.comments[1];
  const comment = secondComment.replies.find((reply) => reply.id === commentId);

  return (
    <div>
      <div className="existing-replies">
        {comment && (
          <div key={comment.id} className="existing-comment">
            <div className="existing-button">
              <ButtonCard />
            </div>
            <div className="existing-information">
              <img src={Ramsesmiron} alt="profile" />
              <title>{comment.user.username}</title>
              <img src={ReplyArrow} alt="reply-arrow" />
              <p>{comment.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExistingReply;
