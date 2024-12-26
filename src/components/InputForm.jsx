import React, { useState } from "react";

function InputForm({ onSubmit }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!latitude || !longitude || !startDate || !endDate) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ latitude, longitude, startDate, endDate });
  };

  return (
    <form
      className="grid gap-4 grid-cols-1 md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        placeholder="Latitude"
        className="border p-2"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        min="-90"
        max="90"
        step="0.01"
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        className="border p-2"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        min="-180"
        max="180"
        step="0.01"
        required
      />
      <input
        type="date"
        className="border p-2"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        className="border p-2"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button
        type="submit"
        className="col-span-full bg-blue-500 text-white p-2 rounded"
      >
        Fetch Weather Data
      </button>
    </form>
  );
}

export default InputForm;
