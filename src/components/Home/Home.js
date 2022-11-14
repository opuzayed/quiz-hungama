import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Categories from '../Categories/Categories';
import HomeTop from '../HomeTop/HomeTop';
import './Home.css';
const Home = () => {
    const quizs = useLoaderData();
    const newQuizes = quizs.data;
    
    // const handleQuiz = (id) => {
    //    return id;
    // }
    return (
       <div>
            <HomeTop></HomeTop>
            <div className='quiz-container'>
            {
                newQuizes.map(quiz =><Categories
                key = {quiz.id}
                quiz={quiz}
                ></Categories>)
            }
            </div>
       </div>
        
    );
};

export default Home;