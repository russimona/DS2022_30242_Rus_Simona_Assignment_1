import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getMeasurements } from "../../commons/api/measurements-api";

const Chart = ({ deviceId }) => {
  const [data, setData] = useState(null);
  function fetchMeasurements() {
    return getMeasurements((result, status, err) => {
      if (result !== null && status === 200) {
        setData(
          result.map((item) => {
            if (item.deviceId === deviceId)
              return {
                time:
                  new Date(item.timestamp).toLocaleDateString() +
                  new Date(item.timestamp).getHours() +
                  ":" +
                  new Date(item.timestamp).getMinutes(),
                consumption: item.consumption,
              };
          })
        );
      } else {
        alert("Could not fetch data.");
      }
    });
  }

  useEffect(() => {
    fetchMeasurements();
  }, []);

  return (
    <ResponsiveContainer width="80%" height="40%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
