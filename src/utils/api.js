import axios from "axios";

export const fetchWeatherData = async ({
  latitude,
  longitude,
  startDate,
  endDate,
}) => {
  try {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive",
      {
        params: {
          latitude,
          longitude,
          start_date: startDate,
          end_date: endDate,
          daily:
            "temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean", // Comma-separated string
          timezone: "auto",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Unable to fetch weather data. Please check your inputs and try again."
    );
  }
};
