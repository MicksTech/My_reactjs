import React from 'react'

export default function Service() {
    return (
        <section
            id="service"
            className="w-full min-h-screen flex flex-col items-center px-6 py-16" data-aos='zoom-in'
        >
            {/* Title */}
            <h2 className="text-3xl font-bold uppercase">Our Services</h2>

            {/* DIGITAL SERVICES */}
            <h3 className="mt-14 font-bold text-lg uppercase tracking-wide">
                Digital Services
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">UI / UX Design</h4>
                    <p className="mt-2 text-sm">
                        I create responsive and user-friendly interfaces using modern
                        design principles and technologies.
                    </p>
                </div>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">Web Design</h4>
                    <p className="mt-2 text-sm">
                        Clean, modern, and professional website layouts optimized for all
                        devices.
                    </p>
                </div>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">Frontend Development</h4>
                    <p className="mt-2 text-sm">
                        Interactive frontend applications using React, Tailwind CSS, and
                        JavaScript.
                    </p>
                </div>
            </div>
            
            <h3 className="mt-14 font-bold text-lg uppercase tracking-wide">
                Technical Services
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">System Development</h4>
                    <p className="mt-2 text-sm">
                        Backend systems using PHP, MySQL, authentication, and dashboards.
                    </p>
                </div>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">Website Maintenance</h4>
                    <p className="mt-2 text-sm">
                        Fixing bugs, updating features, and improving website performance.
                    </p>
                </div>
                <div className='w-full md:max-w-96 h-32 shadow-md rounded p-4'>
                    <h4 className="font-bold text-lg">Deployment</h4>
                    <p className="mt-2 text-sm">
                        Deploy websites using Github, Vercel, Netlify, or shared hosting.
                    </p>
                </div>
            </div>
        </section>
    )
}
