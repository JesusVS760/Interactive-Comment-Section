import React, { useEffect, useState } from "react";
import profilePicAmy from "../images/avatars/image-amyrobson.png";
import profilePicMax from "../images/avatars/image-maxblagun.png";
import ButtonCard from "./ButtonCard";
import ExistingReply from "./ExistingReply";
import ReplyCard from "./ReplyCard";
import ReplyArrow from "../images/icon-reply.svg";
import "./CommentCard.css";
import data from "../data.json";

const CommentCard = () => {
  const [jsonData, setJsonData] = useState(null);
  const [replyVisibility, setReplyVisibility] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setJsonData(data);
        const initialReplyVisibility = {};
        data.comments.forEach((comment) => {
          initialReplyVisibility[comment.id] = false;
        });
        setReplyVisibility(initialReplyVisibility);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleReply = (commentId) => {
    setReplyVisibility((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
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
                <ButtonCard initialCount={comment.score} />
              </div>
              <div className="comment-content">
                <div className="comment-content-header">
                  <img
                    src={
                      comment.user.username === "amyrobson"
                        ? profilePicAmy
                        : profilePicMax
                    }
                    alt="poster"
                    className={
                      comment.user.username === "amyrobson"
                        ? "amyProfile"
                        : "maxProfile"
                    }
                  />
                  <p>{comment.user.username}</p>
                  <div className="reply">
                    <img
                      onClick={() => toggleReply(comment.id)}
                      src={ReplyArrow}
                      alt="reply-arrow"
                    />
                    <button onClick={() => toggleReply(comment.id)}>
                      Reply
                    </button>
                  </div>
                </div>
                <p>{comment.content}</p>
              </div>
              {replyVisibility[comment.id] && <ReplyCard />}
            </div>
          ))}
          <div className="ExistingComment">
            <ExistingReply />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
