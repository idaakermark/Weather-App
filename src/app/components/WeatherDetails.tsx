import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";

interface WeatherDetailsProps {
    data: {
        current?: {
            wind_kph: number
            humidity: number
        }
        forecast?: {
            forecastday: {
                astro: {
                    sunrise: string
                    sunset: string
                }
            }[]
        }
    }
}

const WeatherDetails = ({ data }:WeatherDetailsProps) => {
    if (!data.current) {
        return null;
    }

    return (
        <div className='p-12'>
                <div className='bg-white/50 p-6 items-center justify-center gap-6 rounded-xl'>
            <h1 className='mb-6 text-3xl text-white'>Weather Details</h1>
                    <div className='text-xl'>
                        <p className='flex gap-2 pb-4'><FiWind/> {data.current.wind_kph} kph</p>
                        <p className='flex gap-2 pb-4'><WiHumidity/> {data.current.humidity}%</p>
                        <p className='flex gap-2 pb-4'><BsSunrise/> {data.forecast?.forecastday[0]?.astro.sunrise}</p>
                        <p className='flex gap-2 pb-3'><BsSunset/> {data.forecast?.forecastday[0]?.astro.sunset}</p>
                    </div>
                </div>
        </div>
    )
}

export default WeatherDetails