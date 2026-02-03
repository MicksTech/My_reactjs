import React from 'react'
import Service from './Service'
import Project from './Project'
import Skills from './Skills'
import Gradpic from '../assets/image/Gradpic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    const education = [
        { level: 'Primary School', school: 'Luya Elementary School', year: '2014-2015' },
        { level: 'Junior High School', school: 'Luya National High School', year: '2018-2019' },
        { level: 'Senior High School', school: 'Luya National High School', year: '2019-2021' },
        { level: 'College', school: 'Lemery Colleges', year: '2020-2024' },
    ]

    return (
        <section>
            <main
                id="about"
                className="min-h-screen w-full flex flex-col justify-center items-center px-4"
            >
                {/* Heading */}
                <h3 className="uppercase text-3xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                    About
                    <span className="block w-32 h-1 rounded bg-slate-500 mt-2 mx-auto"></span>
                </h3>

                {/* Education Section */}
                <div className="flex flex-col md:flex-row w-full max-w-5xl mt-10 gap-6 p-4">
                    <img
                        src={Gradpic}
                        alt="Graduation Picture"
                        className="w-full md:w-64 h-64 md:h-auto object-cover rounded"
                    />
                    <span className='min-h-4xl w-1 bg-slate-500 rounded'></span>
                    <div className="flex-1 flex flex-col gap-4">
                        <h3 className="text-slate-800 dark:text-white text-2xl uppercase font-bold">
                            <FontAwesomeIcon icon={faGraduationCap} />Educational Background
                        </h3>

                        {education.map((edu, index) => (
                            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-3 shadow-md">
                                <h4 className="font-semibold text-slate-800 dark:text-white">{edu.level}</h4>
                                <h5 className="text-gray-700 dark:text-gray-300"><FontAwesomeIcon icon={faSchool} />{edu.school}</h5>
                                <span className="text-gray-500 dark:text-gray-400"><FontAwesomeIcon icon={faGraduationCap} />{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    )
}
