'use client'
import React, { useState } from 'react'

import Search from './components/Search'
import Today from './components/Today'
import WeatherWeek from './components/WeatherWeek'
import WeatherDetails from './components/WeatherDetails'
import HourlyForecast from './components/HourlyForecast'
import Navbar from './components/Navbar'

const Home: React.FC = () => {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState('');
  const [error, setError] = React.useState('');

  const url = `http://api.weatherapi.com/v1/forecast.json?key=a544d5c39112499cbea145532242601&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation('');
        setError('');
      } catch (error) {
        setError('City Not Found');
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === '') {
    content = (
      <div className='text-white text-center h-screen mt-[5rem]'>
        <h2 className='text-3xl font-bold pb-4'>Welcome to my weather app!</h2>
        <p className='text-2xl'>Enter the name of your city to get the weather forecast</p>
      </div>
    );
  } else if (error !== '') {
    content = (
      <div className='text-white text-center h-screen mt-[5rem] text-2xl'>
        <p>City Not Found,</p>
        <p>Please enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className='flex md:flex-row flex-col px-12 items-center'>
          <Today data={data} />
          <WeatherDetails data={data} />
          <HourlyForecast data={data} />
        </div>
        <div className='p-12 items-center justify-between'>
          <WeatherWeek data={data} />
        </div>
      </>
    );
  }

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url(/Images/clouds.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundImageStyle} className='h-fit'>
      <div className='bg-white/25 w-full flex flex-col h-fit'>
        <div className='flex flex-col md:flex-row justify-between items-center p-12'>
          <Search handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className='mb-8 md:mb-0 order-1 text-white py-2 px-4'>
            <Navbar />{' '}
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;

