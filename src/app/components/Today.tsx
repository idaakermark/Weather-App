import { getCurrentDate } from "../utils/currentDate"

import { IoLocationSharp } from "react-icons/io5"

interface CurrentProps {
    data: {
        current: {
            condition: {
                icon: string
                text: string
            }
            temp_c: number
        }
        location: {
            name: string
            region: string
        }
    }
}

const Today = ({ data }: CurrentProps) => {
    const currentDate = getCurrentDate()
    const weatherIcon = data.current.condition.icon

    return (
        <div className='flex flex-col mb-8 md:mb-0 items-center gap-2 bg-black/50 p-6 text-center rounded-lg'>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-3xl text-white'>Today</h1>
                    <p className='text-white'>{currentDate}</p>
                </div>
            </div>
            <div className='text-white'>
                <p className='text-5xl'>
                    {data.current.temp_c.toFixed()}°c
                </p>
                <p>{data.current.condition.text}</p>
                {weatherIcon && (
                    <div>
                        <img className='w-[50px] object-cover'
                        src={weatherIcon} 
                        alt={data.current.condition.text}/>
                    </div>
                )}
            </div>
            <div>
                <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
                    <IoLocationSharp />
                    <p>{data.location.name}, {data.location.region}</p>
                </div>
            </div>
        </div>
    )
}

export default Today