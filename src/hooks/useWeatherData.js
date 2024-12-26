import { useState } from "react";
import { fetchWeatherData as apiFetchWeatherData } from "../utils/api";

function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherData = async ({
    latitude,
    longitude,
    startDate,
    endDate,
  }) => {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetchWeatherData({
        latitude,
        longitude,
        startDate,
        endDate,
      });
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeatherData };
}

export default useWeatherData;
