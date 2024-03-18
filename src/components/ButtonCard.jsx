import React, { useState } from "react";
import "./ButtonCard.css";

const ButtonCard = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    setCount(count - 1);
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
