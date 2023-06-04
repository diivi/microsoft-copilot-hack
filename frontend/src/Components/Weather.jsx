import { useState, useEffect } from "react";
import useData from "../hooks/swrHook";
import axios from "axios";
const cityOptions = [
  { value: "ahmedabad", label: "Ahmedabad" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
  { value: "delhi", label: "Delhi" },
  { value: "dubai", label: "Dubai" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "jaipur", label: "Jaipur" },
  { value: "mumbai", label: "Mumbai" },
  { value: "jodhpur", label: "Jodhpur" },
  { value: "kolkata", label: "Kolkata" },
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "pune", label: "Pune" },
  { value: "surat", label: "Surat" },
  { value: "tokyo", label: "Tokyo" },
  { value: "toronto", label: "Toronto" },
  { value: "vadodara", label: "Vadodara" },
  { value: "washington", label: "Washington" },
];

const Weather = () => {
  const [city, setCity] = useState("mumbai");
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useData(`http://20.198.105.30:8080/weather/${city}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [cityPhoto, setCityPhoto] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);

  useEffect(() => {
    const fetchCityPhoto = async () => {
      setImgLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?query=${city}&per_page=9&client_id=jjek9pjLcNuvzP_mZZp5Q6aHqARElpbHWlKOcOrKBxM`
        );
        console.log(response.data);
        // Update state with the city photo data
        if (response.data.results.length > 0) {
          let randomNumber = Math.floor(Math.random() * 5);
          setCityPhoto(response.data.results[randomNumber]);
        }
      } catch (error) {
        console.error("Error fetching city photo:", error);
      } finally {
        setImgLoading(false);
      }
    };
    fetchCityPhoto();
  }, [city]);

  let filteredData = [];

  if (!isLoading && weatherData) {
    const indices = [5, 13, 21, 29];

    filteredData = indices.map((index) => weatherData.list[index]);
  }
  {
    isLoading && <p>Loading...</p>;
  }
  {
    isError && <p>Error fetching weather data.</p>;
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="bg-boxHead font-mono text-mainGray rounded-2xl p-4">
      <h2 className="text-2xl text-center m-4 mb-8">Weather Forecast</h2>
      <div className="flex justify-evenly mb-8 flex-row md2:flex-col md2:items-center md2:gap-4 lg3:flex-row">
        {imgLoading ? (
          <div className="w-36 h-36 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          cityPhoto && (
            <img
              className=" w-2/5 object-cover rounded-lg shadow-lg md2:w-auto lg3:w-2/5"
              src={cityPhoto.urls.small}
              alt={cityPhoto.alt_description}
            />
          )
        )}

        <div className="flex flex-col justify-center items-center gap-3">
          <select
            value={city}
            onChange={handleCityChange}
            className="block text-2xl w-full bg-boxHead focus:outline-none"
          >
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {!isLoading && weatherData && (
            <h3 className="text-mainGray text-5xl">
              {(weatherData.list[0].main.temp - 273.15).toFixed(0)}&deg;C
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
        </div>
      </div>
      <div className="flex justify-evenly mb-14 flex-row md2:flex-col md2:gap-4 lg3:flex-row">
        <div className="flex flex-col justify-center items-center gap-3">
          {!isLoading && weatherData && (
            <h3 className="text-mainGray text-3xl">
              {weatherData.list[0].main.humidity}%
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
          <h3 className="text-2xl">Humidity</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          {!isLoading && weatherData && (
            <h3 className="text-mainGray text-3xl">
              {weatherData.list[0].wind.speed}m/s
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
          <h3 className="text-2xl">Wind Speed</h3>
        </div>
      </div>
      <div className="flex justify-between gap-4 mx-4 xl3:flex-wrap lg2:gap-1">
        {weatherData && (
          <>
            {filteredData.map((day) => (
              <div
                key={day.dt}
                className="flex flex-col items-center justify-around text-boxHead bg-boxGreen rounded-full w-auto p-4 mb-4"
              >
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col items-center justify-evenly">
                  <h3>
                    <span className="text-lg font-bold">
                      {Math.round(day.main.temp_max - 273.15)}°C
                    </span>
                    <br />
                    <span className="text-sm">
                      /{Math.round(day.main.temp_min - 273.15)}°C
                    </span>
                  </h3>
                </div>
                <span className="text-center">
                  {new Date(day.dt_txt).getDate()},{" "}
                  {new Date(day.dt_txt).toLocaleString("default", {
                    month: "short",
                  })}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
