import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const topicsData = useLoaderData();
  const newTopics = topicsData.data;

  return (
    <div className="container pt-5">
      <div className="row">
        {newTopics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
