import React from "react";

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="delete-container">
      <div className="delete-card">
        <h1>Delete Comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="button-choices">
          <button className="cancel-button">NO, CANCEL</button>
          <button onClick={handleDelete} className="delete-button">
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
