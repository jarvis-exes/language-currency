import React from "react";
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

function WeatherGraph({ data }) {
  const chartData = data.daily.time.map((time, index) => ({
    date: time,
    "Max Temp": data.daily.temperature_2m_max[index],
    "Min Temp": data.daily.temperature_2m_min[index],
    "Mean Temp": data.daily.temperature_2m_mean[index],
    "Apparent Max Temp": data.daily.apparent_temperature_max[index],
    "Apparent Min Temp": data.daily.apparent_temperature_min[index],
    "Apparent Mean Temp": data.daily.apparent_temperature_mean[index],
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Temperature Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Max Temp" stroke="#ff6384" />
          <Line type="monotone" dataKey="Min Temp" stroke="#36a2eb" />
          <Line type="monotone" dataKey="Mean Temp" stroke="#3632eb" />
          <Line type="monotone" dataKey="Apparent Max Temp" stroke="#00bd16" />
          <Line type="monotone" dataKey="Apparent Min Temp" stroke="#bd5500" />
          <Line type="monotone" dataKey="Apparent Mean Temp" stroke="#63016e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherGraph;
