import React from 'react'

interface HourlyForecastProps {
  data: {
    forecast?: {
      forecastday: [
        {
          hour: Array<{
            time_epoch: number
            temp_c: number
            condition: {
              text: string
              icon: string
            }
          }>
        }
      ]
    }
  }
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  const currentEpoch = Math.floor(new Date().getTime() / 1000);
  const upcomingForecast = data?.forecast?.forecastday[0]?.hour?.filter(
    (hourData) => hourData.time_epoch > currentEpoch
  )?.slice(0, 6);

  if (!upcomingForecast || upcomingForecast.length === 0) {
    return <div>No upcoming hourly forecast data available.</div>
  }

  return (
    <div className='bg-white/40 p-4 text-center rounded-lg'>
      <h2 className='mb-6 text-3xl text-white text-center'>Hourly Forecast</h2>
      <div className='flex flex-col md:flex-row md:gap-12 gap-8 text-center text-xl'>
        {upcomingForecast.map((hourData) => (
          <div key={hourData.time_epoch}>
            <p className='font-medium'>{new Date(hourData.time_epoch * 1000).toLocaleTimeString()}</p>
            <p>{`${hourData.temp_c}°C`}</p>
            <img className='mx-auto' src={hourData.condition.icon} alt={hourData.condition.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;