import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = ({ quiz }) => {
//   console.log(quiz);
  const { id, logo, name, total } = quiz;
  const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/quizdetails/${id}`)
    }
  return (
   <div className="quiz">
    <img src={logo} alt="" />
    <div className='quiz-info'>
    <p className='quiz-name'>{name}</p>
    <p>Total: {total}</p>
    </div>
    <button onClick={handleNavigate}className='btn-card'>
        <p className='btn-text'>Start Quiz</p>
    </button>
   </div>
  );
};

export default Categories;
