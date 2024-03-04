import React, { useEffect, useState } from "react";
import profilePicAmy from "../images/avatars/image-amyrobson.png";
import ButtonCard from "./ButtonCard";
import "./CommentCard.css";
import data from "../data.json";

const CommentCard = () => {
  const [jsonData, setJsonData] = useState(null);

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
    return <div>Loading...</div>; // Moved return statement inside the function body
  }

  const firstComment = jsonData.comments[0];

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
              {/* Render your fetched data here */}
              <p>{firstComment.content}</p>
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
