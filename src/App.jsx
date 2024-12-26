/* File: src/App.jsx */
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherGraph from "./components/WeatherGraph";
import WeatherTable from "./components/WeatherTable";
import Loader from "./components/Loader";
import ErrorModal from "./components/ErrorModal";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const { weatherData, loading, error, fetchWeatherData } = useWeatherData();
  const [showError, setShowError] = useState(false);

  const handleFetchData = async (inputs) => {
    fetchWeatherData(inputs);
    if (error) setShowError(true);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Weather Dashboard</h1>
      <InputForm onSubmit={handleFetchData} />
      {loading && <Loader />}
      {weatherData && (
        <>
          <WeatherGraph data={weatherData} />
          <WeatherTable data={weatherData} />
        </>
      )}
      {showError && <ErrorModal error={error} onClose={handleCloseError} />}
    </div>
  );
}

export default App;
