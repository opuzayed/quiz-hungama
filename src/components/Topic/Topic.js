import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topic.css";
const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quizdetails/${id}`);
  };
  return (
    <div className="col-md-4 col-12">
      <div className="quiz">
        <div className="p-2">
          <img src={logo} alt="" />
        </div>
        <div className="quiz-info">
          <p className="quiz-name">{name}</p>
          <p>Total: {total}</p>
        </div>
        <button onClick={handleNavigate} className="btn-card">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Topic;
