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
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    const replyComment = document.querySelector(".reply-comment");
    if (isVisible) {
      replyComment.style.visibility = "hidden";
      replyComment.style.display = "none";
    } else {
      replyComment.style.visibility = "visible";
      replyComment.style.display = "block";
    }
  };

  useEffect(() => {
    // Fetch JSON data from data.json
    const fetchData = async () => {
      try {
        // const response = await fetch('data.json');
        // const data = await response.json();
        // setJsonData(data);
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const firstComment = jsonData.comments[0];
  const SecondComment = jsonData.comments[1];

  return (
    <>
      <div className="card-container">
        <div className="post-comment">
          <div className="comment-card">
            <div className="comment-likes">
              <ButtonCard />
            </div>
            <div className="comment-content">
              <div className="comment-content-header">
                <img src={profilePicAmy} alt="poster" className="amyProfile" />
                <p>{firstComment.user.username}</p>
                <div className="reply">
                  <img
                    onClick={handleClick}
                    src={ReplyArrow}
                    alt="reply-arrow"
                  />
                  <button onClick={handleClick}>Reply</button>
                </div>
              </div>
              {/* Render your fetched data here */}
              <p>{firstComment.content}</p>
            </div>
          </div>
          <div>
            <ReplyCard />
          </div>
          {/* SECOND MAIN COMMENT */}
          <div className="comment-card-2">
            <div className="comment-likes">
              <ButtonCard />
            </div>
            <div className="comment-content">
              <div className="comment-content-header">
                <img src={profilePicMax} alt="poster" className="maxProfile" />
                <p>{SecondComment.user.username}</p>
                <div className="reply">
                  <img
                    onClick={handleClick}
                    src={ReplyArrow}
                    alt="reply-arrow"
                  />
                  <button onClick={handleClick}>Reply</button>
                </div>
              </div>
              {/* Render your fetched data here */}
              <p>{SecondComment.content}</p>
            </div>
          </div>
          <div>
            <ReplyCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
