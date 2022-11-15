import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";
const Statistics = () => {
  const statData = useLoaderData();
  const newData = statData.data;
  return (
    <ResponsiveContainer width="100%" height="100%">
    <div>
      
        <AreaChart
        className="chart-style"
          width={700}
          height={400}
          data={newData}
        >
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </AreaChart>
    </div>
    </ResponsiveContainer>
  );
};

export default Statistics;
