import { useState, useEffect } from "react";
import useData from "../hooks/swrHook";
import axios from "axios";
import { CircularProgress } from "@mui/material";
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
    <div className='bg-white font-mono text-boxHead rounded-2xl p-4 transition duration-300 ease-in-out shadow-md'>
      <h2 className="text-2xl font-sans text-center m-4 mb-8">Weather Forecast</h2>
      <div className="flex justify-evenly mb-8 flex-row md2:flex-col md2:items-center md2:gap-4 lg3:flex-row
      sm2:flex-col sm2:items-center sm2:gap-4">
        {imgLoading ? (
          // <div className="w-36 h-36 flex items-center justify-center">
          //   <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          // </div>
          <CircularProgress />
        ) : (
          cityPhoto && (
            <img
              className="w-2/5 object-cover rounded-lg shadow-lg md2:w-auto lg3:w-2/5 sm2:w-3/4"
              style={{ height: "10rem" }}
              src={cityPhoto.urls.small}
              alt={cityPhoto.alt_description}
            />
          )
        )}

        <div className="flex flex-col justify-center  gap-3">
          <select
            value={city}
            onChange={handleCityChange}
            className="block text-2xl w-full bg-transparent focus:outline-none"
          >
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {!isLoading && weatherData && (
            <h3 className="text-5xl xs2:text-3xl">
              {(weatherData.list[0].main.temp - 273.15).toFixed(0)}&deg;C
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
        </div>
      </div>
      <div className="flex justify-evenly mb-10 flex-row md2:flex-col md2:gap-4 lg3:flex-row xs3:mb-8">
        <div className="flex flex-col justify-center items-center gap-3">
          {!isLoading && weatherData && (
            <h3 className="text-3xl xs2:text-lg font-bold">
              {weatherData.list[0].main.humidity}%
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
          <h3 className="text-xl xs2:text-base font-sans text-gray-700">Humidity</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          {!isLoading && weatherData && (
            <h3 className="text-3xl xs2:text-lg font-bold">
              {weatherData.list[0].wind.speed}m/s
            </h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
          <h3 className="text-xl xs2:text-base font-sans text-gray-700">Wind Speed</h3>
        </div>
      </div>
      <div className="flex xs3:hidden justify-evenly mx-4 gap-1 xl2:flex-wrap lg2:gap-1">
        {weatherData && (
          <>
            {filteredData.map((day) => (
              <div
                key={day.dt}
                className="flex flex-col items-center justify-around text-mainGray
                bg-boxHead rounded-full h-44 p-4 mb-4  "
              >
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col items-center justify-evenly">
                  <h3>
                    <span className="text-base font-bold">
                      {(day.main.temp_max - 273.15).toFixed(2)}°C
                    </span>
                    <br />
                    <span className="text-sm">
                      /{(day.main.temp_min - 273.15).toFixed(2)}°C
                    </span>
                  </h3>
                </div>
                <span className="text-center">
                  {new Date(day.dt_txt).getDate()},
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
