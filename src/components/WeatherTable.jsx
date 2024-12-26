import React, { useState } from "react";

function WeatherTable({ data }) {
  const rowsPerPageOptions = [10, 20, 50];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedData = data.daily.time
    .map((_, index) => ({
      date: data.daily.time[index],
      maxTemp: data.daily.temperature_2m_max[index],
      minTemp: data.daily.temperature_2m_min[index],
      meanTemp: data.daily.temperature_2m_mean[index],
      AmaxTemp: data.daily.apparent_temperature_max[index],
      AminTemp: data.daily.apparent_temperature_min[index],
      AmeanTemp: data.daily.apparent_temperature_mean[index],
    }))
    .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Weather Data Table</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Max Temp (°C)</th>
            <th className="border p-2">Min Temp (°C)</th>
            <th className="border p-2">Mean Temp (°C)</th>
            <th className="border p-2">Apparent Max Temp (°C)</th>
            <th className="border p-2">Apparent Min Temp (°C)</th>
            <th className="border p-2">Apparent Mean Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{row.date}</td>
              <td className="border p-2 text-center">{row.maxTemp}</td>
              <td className="border p-2 text-center">{row.minTemp}</td>
              <td className="border p-2 text-center">{row.meanTemp}</td>
              <td className="border p-2 text-center">{row.AmaxTemp}</td>
              <td className="border p-2 text-center">{row.AmeanTemp}</td>
              <td className="border p-2 text-center">{row.AmeanTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Previous
        </button>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="border p-2"
        >
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} rows
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(data.daily.time.length / rowsPerPage) - 1
                ? prev + 1
                : prev
            )
          }
          disabled={
            currentPage === Math.ceil(data.daily.time.length / rowsPerPage) - 1
          }
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WeatherTable;
