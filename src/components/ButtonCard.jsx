import React from "react";
import "./ButtonCard.css";

const ButtonCard = () => {
  return (
    <div>
      <div className="button-card">
        <button>+</button>
        <span>Likes</span>
        <button>-</button>
      </div>
    </div>
  );
};

export default ButtonCard;
