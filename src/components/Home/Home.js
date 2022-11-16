import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import HomeTop from "../HomeTop/HomeTop";
import "./Home.css";
const Home = () => {
  const quizs = useLoaderData();
  const newQuizes = quizs.data;
  return (
    <div>
      <HomeTop></HomeTop>
      <div className="container">
        <div className="row">
          {newQuizes.map((quiz) => (
            <Categories key={quiz.id} quiz={quiz}></Categories>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
