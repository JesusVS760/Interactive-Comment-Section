import React, { useState } from "react";
import "./ButtonCard.css";

const ButtonCard = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  const addCount = () => {
    if (!isLiked) {
      setCount(count + 1);
      setIsLiked(true);
    }
  };

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="button-card">
        <button className="buttonAdd" onClick={addCount}>
          +
        </button>
        <p>{count}</p>
        <button className="buttonSub" onClick={subtractCount}>
          -
        </button>
      </div>
    </div>
  );
};

export default ButtonCard;
