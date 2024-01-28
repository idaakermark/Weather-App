'use client'
import Navbar from "../components/Navbar"

export default function week4() {
    return (
        <main className='bg-slate-500 p-8 h-full'>
                <Navbar />
            <div className='md:px-40 md:py-20 px-20 py-10 bg-white flex flex-col gap-3 mt-8'>
                <h2 className='text-2xl'>Week 4</h2>
                <h3 className='text-xl'>Reflection on the progress </h3>
                <p>The fourth and final week of the project brought about a reflection on the entire development process. The journey from selecting the weather API to building a functional weather application was both challenging and rewarding. I have learnt a lot and I am very happy that I chose to work with the technology that I did. I wanted to take my time to learn and research my chosen technologies, and I feel like these 4 weeks has made that possible for me. I now feel more confident with using next.js, tailwind and typescript. I have also realized how much more I like working in a team of people rather than working on a project like this alone. It has sometimes been quite uninspiring to not have people around to push, motivate and inspire me though the projects process. </p>
                <p>Another reflection I have made through out the time of this project is that I will do everything in my power to have my feature work place use Tailwind CSS - if they don’t already. Its my favorite CSS language for sure! </p>
                <h3 className='text-xl'>Did you achieve what you set out to achieve?</h3>
                <p>Yes, looking back at my thesis and the acceptance criteria for my weather app, everything was successfully met! The application now provides real-time weather data and updates, features user friendly styling and implements effective navigation through next.js routing and hamburger menu. These accomplishments aligns with the initial project goals. </p>
                <h3 className='text-xl'>What I could/should have done better</h3>
                <p>While the project achieved its primary objectives, there are areas that could have been handled more efficiently. One notable aspect is the need for a dedicated Tailwind CSS page for general layout styling. Additionally, the hamburger menu on the documentation pages requires attention. Its hard to read the menu items and it just does not look very nice right now. </p>
                <h3 className='text-xl'>What I spent too much time on </h3>
                <p>I for sure spent way too much time on trying to fetch too much data into the app. I wanted the app to provide as much information about the weather as possible, but it turned out to be way too much information. When displaying that much data it was extremely hard to style it and make it user friendly. Or to the point where anyone would want to look at it. So i decided to narrow it down to what I thought was the most important data to display. </p>
                <h3 className='text-xl'>What I learnt </h3>
                <p>This project provided valuable insights into real-world application development. Understanding hot to integrate real-time data, employing responsive design with Tailwind Css, and leveraging Next.js for efficient routing were significant learning points. The importance of planning and structuring code for maintainability became evident throughout the development process. </p>
                <p>I learnt to really like Next.js, Tailwind CSS and typescript. And i really hope I work more with these technologies in the future.</p>
                <h3 className='text-xl'>Future improvements </h3>
                <p>Looking forward, the weather application could be further improved, refined and expanded upon in several ways. Considerations include: </p>
                <p>1. Enhanced styling: Invest in a more comprehensive and visually appealing Tailwind CSS layout to create a polished and consistent user interface. </p>
                <p>2. Additional features: Introduce new features, such as a historical weather data, location-based customization, personalized user profiles where the user can save specific locations and not have to search for them. </p>
                <p>3. User interaction: Implement user interaction elements, like animations, dynamic weather visualizations, to make the app more engaging and immersive.  </p>
            </div>
        </main>
    )
}

