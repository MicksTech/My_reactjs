import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faInfoCircle,
    faCogs,
    faMoon,
    faSun,
    faBars,
    faXmark,
    faProjectDiagram,
    faPhone
} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false)
    const [showNav, setShowNav] = useState(false)

    // DARK MODE
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [darkMode])

    return (
        <div className="w-full bg-slate-300 sticky top-0 z-10">

            <header className="flex justify-around items-center h-24 px-6">

                {/* LOGO */}
                <h1 className="text-xl font-bold text-slate-700">JMC</h1>

                {/* DESKTOP NAV */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 text-slate-700">
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCogs} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* RIGHT BUTTONS */}
                <div className="flex gap-4 text-xl text-slate-700">

                    {/* DARK MODE */}
                    <button onClick={() => setDarkMode(!darkMode)}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </button>

                    {/* HAMBURGER */}
                    <button
                        className="md:hidden"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <FontAwesomeIcon icon={showNav ? faXmark : faBars} />
                    </button>

                </div>
            </header>

            {/* MOBILE NAV */}
            {showNav && (
                <div className="md:hidden bg-slate-300 shadow-lg py-6">
                    <ul className="flex flex-col items-center gap-6 text-xl text-slate-700 ">
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCogs} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}

function NavIcon({ icon }) {
    return (
        <li>
            <a className="hover:bg-slate-300 p-3 rounded-full transition">
                <FontAwesomeIcon icon={icon} />
            </a>
        </li>
    )
}
