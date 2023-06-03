import { useState } from 'react';
import useData from '../hooks/swrHook';
import clear from '../assets/clear.png';

const cityOptions = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'paris', label: 'Paris' },
  { value: 'london', label: 'London' },
  { value: 'newyork', label: 'New York' },
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

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className='bg-boxHead text-mainGray rounded-2xl m-8 p-4'>
      <h2 className='text-xl text-center mb-4 font-mono'>Weather Forecast</h2>
      <div className="flex">
        <img className='w-36 h-36' src={clear} alt="" />
        <div className="flex flex-col gap-3">
          <select
            value={city}
            onChange={handleCityChange}
            className="block appearance-none text-2xl w-full bg-transparent focus:outline-none"
          >
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {!isLoading && weatherData && (
            <h3 className='text-mainGray text-5xl font-mono'>{(weatherData.list[0].main.temp - 273.15).toFixed(0)}&deg;C</h3>
          )}
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching weather data.</p>}
        </div>
      </div>
    </div>
  );
};

export default Weather;
