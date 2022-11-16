import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const QuizDetails = () => {
  const qDetails = useLoaderData();
  const ques = qDetails.data.questions;
  const qname = qDetails.data.name;
  return (
    <div className="container pt-3">
      <h2 className="mb-5 text-center">Quiz of {qname}</h2>
      {ques.map((q, index) => (
        <Quiz key={q.id} index={index} q={q}></Quiz>
      ))}
    </div>
  );
};

export default QuizDetails;
