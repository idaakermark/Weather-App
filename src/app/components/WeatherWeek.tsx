interface DayForecast {
    date: string
    day: {
        condition: {
            icon: string 
            text: string 
        }
        maxtemp_c: number
        mintemp_c: number
    }
}

interface WeatherWeekProps {
    data: {
        forecast: {
            forecastday: DayForecast[]
        }
    }
}

const WeatherWeek = ({ data }: WeatherWeekProps) => { 
    return (
        <>
        <h1 className='text-white text-2xl pb-4'>Weather this week</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full'>
                {data.forecast.forecastday.map(( day, index ) => (
                    <div key={ index } className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
                        <p>{new Date(day.date).toLocaleString
                        ('en-US', { weekday: 'short' })}</p>
                        <img src={day.day.condition.icon} alt={day.day.condition.text}/>
                        <div>
                            <p>H: {day.day.maxtemp_c.toFixed()}°</p>
                            <p>L: {day.day.mintemp_c.toFixed()}°</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeatherWeek