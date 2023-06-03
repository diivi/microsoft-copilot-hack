import { useState } from 'react';
import useData from '../hooks/swrHook';

const cityOptions = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'paris', label: 'Paris' },
  { value: 'london', label: 'London' },
  { value: 'jodhpur', label: 'Jodhpur' },
  { value: 'jaipur', label: 'Jaipur' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'bangalore', label: 'Bangalore' },
];

const Weather = () => {
  const [city, setCity] = useState('jodhpur');
  const { data: weatherData, isLoading, isError } = useData(
    `http://20.198.105.30:8080/weather/${city}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  let filteredData = [];

  if (!isLoading && weatherData) {
    const indices = [5, 13, 21, 29];
  
    filteredData = indices.map((index) => weatherData.list[index]);
  }
  {isLoading && <p>Loading...</p>}
  {isError && <p>Error fetching weather data.</p>}
  
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  
  return (
    <div className='bg-boxHead font-mono text-mainGray rounded-2xl m-8 p-4'>
      <h2 className='text-xl text-center mb-4'>Weather Forecast</h2>
      <div className="flex justify-evenly mb-4">
      {!isLoading && weatherData && (
            <img className='w-36' src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} alt="" />
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
        
        <div className="flex flex-col justify-center items-center gap-3">
          
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
            <h3 className='text-mainGray text-5xl'>{(weatherData.list[0].main.temp - 273.15).
              toFixed(0)}&deg;C</h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
        </div>
      </div>
        <div className="flex justify-evenly mb-4">
            <div className="flex flex-col justify-center items-center gap-3">
                {!isLoading && weatherData && (
                    <h3 className='text-mainGray text-3xl'>{weatherData.list[0].main.humidity}%</h3>
                )}
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error fetching weather data.</p>}
                <h3 className='text-2xl'>Humidity</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                {!isLoading && weatherData && (
                    <h3 className='text-mainGray text-3xl'>{weatherData.list[0].wind.speed}m/s</h3>
                )}
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error fetching weather data.</p>}
                <h3 className='text-2xl'>Wind Speed</h3>
            </div>
        </div>
        <div className="flex gap-3">
      {weatherData && (
        <>
          {filteredData.map((day) => (
            <div key={day.dt} className="flex flex-col items-center text-boxHead bg-boxGreen
            rounded-full p-3 mb-4">
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather Icon" className="w-10 h-10" />
              <div className="flex flex-col ml-4">
                <span className="font-bold text-lg">{Math.round(day.main.temp_max - 273.15)}°C</span>
                <span>{Math.round(day.main.temp_min - 273.15)}°C</span>
              </div>
              <span className="ml-auto">{new Date(day.dt_txt).getDate()}, {new Date(day.dt_txt).toLocaleString('default', { month: 'short' })}</span>

            </div>
          ))}
        </>
      )}
    </div>
    </div>
  );
};

export default Weather;
