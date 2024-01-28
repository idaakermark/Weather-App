'use client'
import Navbar from "../components/Navbar"

export default function week1() {
    return (
        <main className='bg-slate-500 p-8 h-full'>
                <Navbar />
            <div className='md:px-40 md:py-20 px-20 py-10 bg-white flex flex-col gap-3 mt-8'>
                <h2 className='text-2xl'>Week 1</h2>
                <h3 className='text-xl'>The projects purpose</h3>
                <p>The main purpose for this project is not necessarily to build a weather app, it is to dive deep into the documentations of the technologies I have chosen to work with. My goal is to gain as much knowledge as possible about these technologies and get more confident with working with them. As a bonus of this, it will result in a user-friendly, mobile-first approach functional weather app. The app will fetch data from a weather API giving the user the oppertunity to search for a location and get the accurate data displayed. </p>
                <h3 className='text-xl'>My point of view</h3>
                <p>Rather than rushing to set up the project, I focused pacing myself in my learning. Taking time to understand and learn about the API I’ve chosen to work with and the technologies which ensured a strong foundation for the upcoming development phase. This approach allowed me to grasp concepts throughly and make informed decisions during the implementation of the project. 
                I dedicated time to researching other weather applications to gather inspiration and insights into design patterns and user experience. This research helped me identify key features, user interfaces, and potential improvements for my own project. </p>
                <h3 className='text-xl'>Users point of view</h3>
                <p>The app will be built with a users perspective in mind. The user should be able to gain any relevant information about the weather when searching for a location. And the app should be functioning equally as good on any device the user might be using. </p>
                <h3 className='text-xl'>Measure of sucess</h3>
                <p>-The weather app should be functional, displaying real-time weather data. Such as temperature, image/icon of weather and location. </p>
                <p>-The app is user friendly and responsive.</p>
                <p>-Styling is made with tailwind css </p>
                <p>-The user can switch between locations and get the accurate weather data. </p>
                <p>-The user can se how the weather will change throughout the day. </p>
                <p>-There is a sidebar/hamburger menu leading to other pages.</p>
                <p>-There are pages of documentation. </p>
                <h3 className='text-xl'>Week 1 conclusion and findings</h3>
                <p>This first week was dedicated to learning and researching key components that form the foundation of the weather application. By prioritizing understanding over immediate implementation, I have equipped myself with necessary knowledge to build a robust and user-friendly application in the weeks to follow. This deliberate approach ensures a solid foundation for the development phase and sets the stage for a successful final project. 
                </p>
                <p>I started the week by researching various APIs to integrate into my application. After careful consideration, I chose the weatherapi.com for its features and ease of integration. </p>
                <p>To enhance the styling and design of my weather app, I studied the documentation for Tailwind css. This involved understanding utility classes, responsive design principles, and the overall styling workflow provided by Tailwind. Key takeaways included the utility-first approach, ease of customization and the flexibility it offers in creation a visually appealing user interface. In my opinion, the tailwind documentation is one of the best ones I have ever read. </p>
                <p>The next step was to familiarize myself with Next.js, a React framework for building web applications. I explored the Next.js documentation to understand its features, routing system and server-side rendering capabilities. I did a lot of research on this, aside from reading through documentation, I spent time watching various of YouTube channels that shows great examples on this. </p>
            </div>
        </main>
    )
}

