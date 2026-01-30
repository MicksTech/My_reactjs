import React from 'react'
import GradPic from '../assets/image/Gradpic.png'

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center w-full min-h-screen px-6" data-aos='zoom-in'
        >
            <h2 className="text-3xl font-bold uppercase mb-8">About</h2>

            <div className="flex flex-col md:flex-row items-center justify-around gap-10 max-w-6xl w-full">

                {/* IMAGE */}
                <img
                    src={GradPic}
                    alt="About"
                    className="w-1/4 h-9/10 hidden md:block drop-shadow-xl"
                />

                {/* CONTENT */}
                <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
                    <p className="text-justify">
                        I am a fresh graduate of Lemery Colleges, where I earned a Bachelor
                        of Science in Information Technology. I have a strong interest in
                        software development and continuously strive to enhance my technical
                        skills through hands-on projects and self-learning.
                    </p>

                    <div className="flex gap-3 justify-center md:justify-start">
                        <a
                            href="file:///C:/Users/johnm/Downloads/Professional%20Minimalist%20CV%20Resume.pdf"
                            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-105 transition duration-300"
                        >
                            View CV
                        </a>

                        <a
                            href="#projects"
                            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-105 transition duration-300"
                        >
                            View Projects
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
