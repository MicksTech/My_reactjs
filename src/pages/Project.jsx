import React from 'react'
import SofaStore from '../assets/image/SofaStore.png'
import Votesystem from '../assets/image/Votesystem.png'
import Alumni from '../assets/image/Alumni.png'
import Reactpj from '../assets/image/Reactpj.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'

export default function Project() {
    return (
        <section
            id="project"
            className="w-full min-h-screen py-20 flex justify-center items-center" data-aos='zoom-in'
        >
            <div className="w-full max-w-6xl px-6">

                {/* Title */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold uppercase">Projects</h2>
                    <p className="mt-2 uppercase text-sm">
                        Frontend Projects
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

                    {/* Sofa Store */}
                    <div className="shadow-md rounded overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                            src={SofaStore}
                            alt="Sofa Store Website"
                            className="w-full h-52 object-cover p-2"
                        />

                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                                Sofa Store Website
                            </h3>

                            <p className="text-sm leading-relaxed">
                                A responsive furniture website showcasing modern sofa designs
                                with clean layout and smooth user experience.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xl"><FontAwesomeIcon icon={faHtml5} /></span>
                                <span className="text-xl"><FontAwesomeIcon icon={faCss} /></span>
                                <span className="text-xl"><FontAwesomeIcon icon={faJs} /></span>
                            </div>
                            <div className='mt-6'>
                                <a href="https://mickstech.github.io/my_sofa_finish/#" target='_blank' className='text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded'>View Project</a>
                            </div>
                        </div>
                    </div>

                    {/* Voting */}
                    <div className="shadow-md rounded overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                            src={Votesystem}
                            alt="Voting System"
                            className="w-full h-52 object-cover p-2"
                        />

                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                                Voting System
                            </h3>

                            <p className="text-sm leading-relaxed">
                                A simple voting system UI created to demonstrate interactive
                                design, responsiveness, and usability.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xl"><FontAwesomeIcon icon={faHtml5} /></span>
                                <span className="text-xl"><FontAwesomeIcon icon={faCss} /></span>
                                <span className="text-xl"><FontAwesomeIcon icon={faJs} /></span>
                            </div>
                            <div className='mt-6'>
                                <a href="https://mickstech.github.io/my_vote_testing/" target='_blank' className='text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded'>View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md rounded overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                            src={Reactpj}
                            alt="Sofa Store Website"
                            className="w-full h-52 object-cover p-2"
                        />

                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                                Portfolio website
                            </h3>

                            <p className="text-sm leading-relaxed">
                                A responsive project use React and the style 
                                use Tailwindcss to enchance UI/UX
                            </p>

                            <div className="flex flex-wrap items-center gap-2 mt-4">
                                <span className="text-xl"><FontAwesomeIcon icon={faReact}/></span>
                                <span className='text-xs text-center'>Tailwind</span>
                            </div>
                            <div className='mt-6'>
                                <a href="https://my-reactjs-three.vercel.app/" target='_blank' className='text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded'>View Project</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="text-center">
                    <p className="mt-6 uppercase text-sm">
                        Frontend & Backend Projects
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-10'>
                    {/* Alumni */}
                    <div className="shadow-md rounded overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                            src={Alumni}
                            alt="Alumni System"
                            className="w-full h-52 object-cover p-2"
                        />

                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">
                                Alumni System
                            </h3>

                            <p className="text-smleading-relaxed">
                                A modern alumni website designed to organize alumni information
                                with responsive layout and clean interface.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 mt-4">
                                <span className="text-xl"><FontAwesomeIcon icon={faHtml5} /></span>
                                <span className="text-xs">Tailwind</span>
                                <span className="text-xl"><FontAwesomeIcon icon={faJs} /></span>
                                <span className="text-xl"><FontAwesomeIcon icon={faPhp} /></span>
                            </div>
                            <div className='mt-6'>
                                <a href="https://github.com/MicksTech/Alumnia_Project" target='_blank' className='text-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded'>View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
