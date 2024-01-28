import { getCurrentDate } from "../utils/currentDate"

import { IoLocationSharp } from "react-icons/io5"

interface CurrentProps {
    data: {
        current?: {
            condition: {
                icon: string
                text: string
            }
            temp_c: number
        }
        location?: {
            name: string
            region: string
        }
    }
}

const Today = ({ data }: CurrentProps) => {
    const currentDate = getCurrentDate()
    const weatherIcon = data.current ? data.current.condition.icon : null

    return (
        <div className='flex flex-col mb-8 md:mb-0 items-center gap-2 bg-black/50 p-6 text-center rounded-lg'>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-3xl text-white'>Today</h1>
                    <p className='text-white'>{currentDate}</p>
                </div>
            </div>
            <div className='text-white'>
            {data.current ? (
                <p className='text-5xl'>
                    {data.current.temp_c.toFixed()}°c
                </p>
            ) : null}
            {data.current ?
                <p>{data.current.condition.text}</p>
            : null}
                {weatherIcon && (
                    <div>
                        <img className='w-[50px] object-cover'
                        src={weatherIcon} 
                        alt='Weather Icon'/>
                    </div>
                )}
            </div>
            <div>
            {data.location ? (
                <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
                    <IoLocationSharp />
                    <p>{data.location.name}, {data.location.region}</p>
                </div>
            ) : null}
            </div>
        </div>
    )
}

export default Today