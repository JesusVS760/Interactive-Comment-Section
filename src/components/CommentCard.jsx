import React, { useEffect, useState } from "react";
import profilePicAmy from "../images/avatars/image-amyrobson.png";
import profilePicMax from "../images/avatars/image-maxblagun.png";
import ButtonCard from "./ButtonCard";
import ReplyCard from "./ReplyCard";
import ReplyArrow from "../images/icon-reply.svg";
import "./CommentCard.css";
import data from "../data.json";

const CommentCard = () => {
  const [jsonData, setJsonData] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleSubmitReply = () => {
    console.log(
      "Reply submitted for comment ID",
      selectedCommentId,
      ":",
      replyContent
    );
    setReplyContent("");
    setSelectedCommentId(null);
  };

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card-container">
        <div className="post-comment">
          {jsonData.comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-likes">
                <ButtonCard />
              </div>
              <div className="comment-content">
                <div className="comment-content-header">
                  <img
                    src={
                      comment.user.username === "Amy Robson"
                        ? profilePicAmy
                        : profilePicMax
                    }
                    alt="poster"
                    className={
                      comment.user.username === "Amy Robson"
                        ? "amyProfile"
                        : "maxProfile"
                    }
                  />
                  <p>{comment.user.username}</p>
                  <div className="reply">
                    <img
                      onClick={() => setSelectedCommentId(comment.id)}
                      src={ReplyArrow}
                      alt="reply-arrow"
                    />
                    <button onClick={() => setSelectedCommentId(comment.id)}>
                      Reply
                    </button>
                  </div>
                </div>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCommentId !== null && (
        <ReplyCard
          key={selectedCommentId}
          commentId={selectedCommentId}
          onReplySubmit={handleSubmitReply}
          onReplyChange={handleReplyChange}
          replyContent={replyContent}
        />
      )}
    </>
  );
};

export default CommentCard;
