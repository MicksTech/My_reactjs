import React from 'react'
import UiUX from '../assets/image/UiUX.jpg'
import TRBS from '../assets/image/TRBS.jpg'
import DEV from '../assets/image/DEV.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCogs, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Service() {
  return (
    <section>
      <main id='service' className="min-h-screen w-full flex flex-col justify-center items-center">
        <h3 className="text-3xl text-center font-bold uppercase text-slate-800 dark:text-white">
          Service
          <span className="h-1 w-32 bg-slate-500 block rounded mx-auto mt-2"></span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8">
          {/* UI / UX */}
          <div className="flex flex-col items-center">
            <img src={UiUX} alt="UI UX Design" className="w-64" />
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="bg-slate-400 p-3 rounded-full z-10 relative bottom-6"
            />
            <div className="bg-slate-300 h-32 w-full relative bottom-10 flex justify-center">
              <p className="w-64 mt-4 p-3 text-sm text-center">
                I design clean, user-friendly interfaces that focus on usability,
                accessibility, and modern design principles.
              </p>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="flex flex-col items-center">
            <img src={TRBS} alt="Troubleshooting" className="w-64" />
            <FontAwesomeIcon
              icon={faCogs}
              className="bg-slate-400 p-3 rounded-full z-10 relative bottom-6"
            />
            <div className="bg-slate-300 h-32 w-full relative bottom-10 flex justify-center">
              <p className="w-64 mt-4 p-3 text-sm text-center">
                I analyze, debug, and optimize systems to ensure smooth performance
                and reliable functionality.
              </p>
            </div>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center">
            <img src={DEV} alt="Web Development" className="w-64" />
            <FontAwesomeIcon
              icon={faCode}
              className="bg-slate-400 p-3 rounded-full z-10 relative bottom-6"
            />
            <div className="bg-slate-300 h-32 w-full relative bottom-10 flex justify-center">
              <p className="w-64 mt-4 p-3 text-sm text-center">
                I build responsive and dynamic websites using modern web
                technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
