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

  const priorCommentId = commentId - 1;
  const priorCommentIndex = priorCommentId - 1;

  let ThirdComment = null;
  if (priorCommentIndex >= 0 && jsonData.comments[priorCommentIndex]) {
    ThirdComment = jsonData.comments[priorCommentIndex];
  }

  return (
    <div>
      <div className="existing-replies">
        {comment && (
          <div key={comment.id} className="existing-comment">
            <div className="existing-comment-likes">
              <ButtonCard />
            </div>
            <div className="existing-content">
              <div className="existing-content-header">
                <img src={Ramsesmiron} alt="profile" />
                <p>{comment.user.username}</p>
                <div className="existing-reply">
                  <img src={ReplyArrow} alt="reply-arrow" />
                  <p>Reply</p>
                </div>
              </div>
              <p className="at-sign-section">
                <span className="at-sign">
                  <span>@</span>
                  {ThirdComment ? ThirdComment.user.username : ""}
                </span>
                <span className="reply-content"> {comment.content}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExistingReply;
