'use client'
import Navbar from "../components/Navbar"

export default function week3() {
    return (
        <main className='bg-slate-500 p-8 h-full'>
                <Navbar />
            <div className='md:px-40 md:py-20 px-20 py-10 bg-white flex flex-col gap-3 mt-8'>
                <h2 className='text-2xl'>Week 3</h2>
                <h3 className='text-xl'>The work progress</h3>
                <p>I dedicated the whole first week to planning this project. As I have realized in previous group projects, having a detailed and solid plan for the project makes it run so much smoother. This is something that is easy to forget when working alone on a project. Therefore, I dedicated the whole first week to get structured and plan the project. But I have also changed things up as I have gone to enhance the app. In the end, I had time to add more features than expected. 
                I got a lot of inspiration from watching different YouTube videos, finding GitHub repos and finding design ideas on Pinterest. I drew a not so detailed design on a piece of paper, writing down all the components and what is necessary for each component and breaking it down to small ”to-dos”. For me, this creates a vision for what I need to do.  </p>
                <p>Problems that I encountered were mostly bugs that took a lot of time to figure out how to solve. Most of them could be solved by looking in the console or terminal for potential errors. Some of the error messages were unclear and needed to be googled for me to solve. I had a lot of issues with building the hamburger menu. It made the whole page jump when being klicked at first, and the icon did not stay in the same place when klicked. This was later solved with some positioning.</p>
                <h3 className='text-xl'>Week 3 conclusions and findings</h3>
                <p>The third week of the project focused on integrating real-time weather data, ensuring that my acceptance criteria will be met, and enhancing the user-friendly styling of the application. Additionally, the implementation of next.js routing for different pages was undertaken, accompanied by the creation of a hamburger menu for improved navigation. </p>
                <p>The primary goal was to integrate real-time weather data into the application. This involved refining the data fetching process, ensuring accurate and up-to-date data and information is displayed to the users,. </p>
                <p>The acceptance criteria for the project were revisited and validated. This step ensured that all specified requirements, functionalities and user expectations were being met as the application progressed. </p>
                <p>To Facilitate navigation within the application, Next.js routing was implemented for different pages. This allowed for a structured and organized flow, enabling users to access specific sections with ease. </p>
                <p>A hamburger menu was introduced as part of the navigation system. This menu design improves user experience, especially on smaller screens, providing a clean and intuitive way for users to explore different pages within the application. I decided to have a hamburger menu for desktop as well because it looks more clean and the app is mobile-first thinking. </p>
                <p>Week 3 marked substantial progress in achieving the projects objectives. Integration of real-time weather data, refinement of user-friendly styling and the application of Next.js routing and a hamburger menu contribute to a more polished and accessible weather application. The focus on meeting acceptance criteria ensures that the app aligns with the projects goals. As the developing journey continues, the groundwork laid in week three sets the stage for further enhancements and additional features. </p>
            </div>
        </main>
    )
}