'use client'
import Navbar from "../components/Navbar"

export default function week2() {
    return (
        <main className='bg-slate-500 p-8 h-full'>
                <Navbar />
            <div className='md:px-40 md:py-20 px-20 py-10 bg-white flex flex-col gap-3 mt-8'>
                <h2 className='text-2xl'>Week 2</h2>
                <h3 className='text-xl'>Technologies used</h3>
                <p>I have chosen to work with relevant and modern technologies that I will be using in the future and would love to learn more about. 
                Next.js for learning more about server side rendering and efficient routing. 
                Tailwind CSS for styling and design purposes. Using a mobile-first mindset. 
                Weather API (weatherapi.com) for fetching real-time data and provide accurate and up-to-date information to the users. 
                React icons (library) for enhancing visual elements in the app, making it easier to understand. 
                I have chosen to use typescript for this project to get more familiar with it. </p>
                <h3 className='text-xl'>Features and functionality</h3>
                <p>This app provides the user with information about the weather. It displays real-time data when you search for a city in the searchbar located on the top of the page. The first thing the user will see when searching for a city is todays weather forecast. It displays today’s date, the temperature in celsius, the weather forecast such as ”sunny”, ”partly cloudy” or ”rain” for example. It also provides the user with a icon that supports the weather forecast to make it a little bit more clear. And lastly it shows the location. </p>
                <p>Inside of the weather details component, the user will see the windspeed, humidity percentage, time of sunrise and the time of sunset. The user can see an icon and then fetched data next to it so that it is accurate. </p>
                <p>The hourly forecast provides details on what the weather will look like six hours ahead of the time being. The hourly forecast displays the time, temperature and an icon of the weather forecast for that time of the day. This gives the user an insight in how the weather will change throughout the day. </p>
                <p>On the bottom of the page, the weather for this week is displayed. It shows the user the weather for the next seven days. The name of the day, an icon of the forecast and the temperatures highs and lows are shown. </p>
                <p>The hamburger menu will take the user to explore the other pages liked to this application. These pages are the documentation week by week for this project. </p>
                <h3 className='text-xl'>Week 2 conclusion and findings </h3>
                <p>This week I transitioned from the preparatory phase to the implementation phase. The focus was on setting up the project, integrating Next.js and Tailwind CSS, implementing data fetching and stating to build the weather app. With the foundational elements in place, I felt ready and organized to start working on the app. Tailwind CSS makes it so easy and efficient with working on the responsiveness making the app look good on different devices. </p>
                <p>I initiated the project by setting up the Next.js environment. This involved creating the necessary project structure, configuring TypeScript and installing essential dependencies. It was nice how Next.js installed Tailwind CSS so efficiently. </p>
                <p>The initial stages of building the weather application commenced. I started structuring the components, incorporating the fetched weather data, and ensuring a smooth integration between the different parts of the application. </p>
            </div>
        </main>
    )
}

