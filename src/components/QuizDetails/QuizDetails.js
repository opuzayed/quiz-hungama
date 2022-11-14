import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const qDetails = useLoaderData();
    const ques = qDetails.data.questions;
    return (
        <div>
            {
                ques.map(q=><Quiz
                key={q.id}
                q={q}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;