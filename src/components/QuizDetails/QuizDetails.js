import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const qDetails = useLoaderData();
    console.log(qDetails);
    return (
        <div>
            <h4>{qDetails.length}</h4>
        </div>
    );
};

export default QuizDetails;