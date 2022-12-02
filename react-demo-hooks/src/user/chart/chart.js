import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
const Chart = () => {
  return (
    <LineChart width={500} height={300}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
