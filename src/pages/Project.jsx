import React from 'react'
import SofaStore from '../assets/image/SofaStore.png'
import Votesystem from '../assets/image/Votesystem.png'
import Alumni from '../assets/image/Alumni.png'
import Reactpj from '../assets/image/Reactpj.png'

export default function Project() {
    return (
        <section
            id="project"
            className="w-full min-h-screen py-20 flex justify-center" data-aos='zoom-in'
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
                    <div className="shadow-md rounded overflow-hidden">
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
                                <span className="px-3 py-1 text-xs rounded-full">HTML</span>
                                <span className="px-3 py-1 text-xs rounded-full">CSS</span>
                                <span className="px-3 py-1 text-xs rounded-full">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Alumni */}
                    <div className="shadow-md rounded overflow-hidden">
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

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 text-xs rounded-full">HTML</span>
                                <span className="px-3 py-1 text-xs rounded-full">CSS</span>
                                <span className="px-3 py-1 text-xs rounded-full">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Voting */}
                    <div className="shadow-md rounded overflow-hidden">
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
                                <span className="px-3 py-1 text-xs rounded-full">HTML</span>
                                <span className="px-3 py-1 text-xs rounded-full">CSS</span>
                                <span className="px-3 py-1 text-xs rounded-full">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md rounded overflow-hidden">
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

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 text-xs rounded-full">ReactJS</span>
                                <span className="px-3 py-1 text-xs rounded-full">Tailwind</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
