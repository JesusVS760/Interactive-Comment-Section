import React, { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard";
import Ramsesmiron from "../images/avatars/image-ramsesmiron.png";
import juliusomo from "../images/avatars/image-juliusomo.png";
import ReplyArrow from "../images/icon-reply.svg";
import trashBin from "../images/icon-delete.svg";
import dataInfo from "../data.json";
import "./ExistingReply.css";
import DeleteButton from "./DeleteButton";

const ExistingReply = ({ commentId }) => {
  const [jsonData, setJsonData] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setJsonData(dataInfo);
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const secondComment = jsonData.comments[1];
  const comment = secondComment.replies.find((reply) => reply.id === commentId);

  const priorCommentId = commentId - 1;
  const priorCommentIndex = priorCommentId - 1;

  let ThirdComment = null;
  if (priorCommentIndex >= 0 && jsonData.comments[priorCommentIndex]) {
    ThirdComment = jsonData.comments[priorCommentIndex];
  }

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    const updatedComments = jsonData.comments.map((c) => ({
      ...c,
      replies: c.replies.filter((r) => r.id !== commentId),
    }));

    setJsonData({
      ...jsonData,
      comments: updatedComments,
    });

    setShowDeleteConfirmation(false);
  };

  return (
    <div className="existing-container">
      <div className="existing-replies">
        {comment && (
          <div key={comment.id} className="existing-comment">
            <div className="existing-comment-likes">
              <ButtonCard initialCount={comment.score} />
            </div>
            <div className="existing-content">
              <div className="existing-content-header">
                {comment.user.username === "ramsesmiron" ? (
                  <img src={Ramsesmiron} alt="image" />
                ) : (
                  <img src={juliusomo} alt="image" />
                )}

                <p className="existing-username">{comment.user.username}</p>
                {comment.user.username === "juliusomo" && (
                  <>
                    <span className="your-reply">you</span>
                    <button onClick={handleDelete} className="delete-button">
                      <img src={trashBin} alt="trash" />
                      Delete
                    </button>
                  </>
                )}

                <div className="existing-reply">
                  <img src={ReplyArrow} alt="reply-arrow" />
                  <p>Reply</p>
                </div>
              </div>
              <p className="at-sign-section">
                <span className="at-sign">
                  <span>@</span>
                  {ThirdComment ? ThirdComment.user.username : "ramsesmiron"}
                </span>
                <span className="reply-content"> {comment.content}</span>
              </p>
            </div>
          </div>
        )}
        {showDeleteConfirmation && (
          <DeleteButton onDelete={handleConfirmDelete} />
        )}
      </div>
    </div>
  );
};

export default ExistingReply;
