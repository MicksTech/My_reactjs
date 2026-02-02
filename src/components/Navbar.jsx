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
    faUser,
    faCode
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/image/Logo.png'

export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false)
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('dark-theme')
        if (savedTheme === 'enabled') {
            setDarkMode(true)
            document.body.classList.add('dark-theme')
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-theme')
            localStorage.setItem('dark-theme', 'enabled')
        } else {
            document.body.classList.remove('dark-theme')
            localStorage.setItem('dark-theme', 'disabled')
        }
    }, [darkMode])


    return (
        <div className="w-full sticky top-0 z-10 scroll-smooth shadow-sm">

            <header className="flex justify-around items-center h-24 px-6">

                {/* LOGO */}
                <a href="">
                    <img src={Logo} alt="" className='w-40 h-32'/>
               </a>

                {/* DESKTOP NAV */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li>
                            <a href="#home" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a href="#about" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </a>
                        </li>
                        <li>
                            <a href="#service" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCogs} />
                            </a>
                        </li>
                        <li>
                            <a href="#project" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* RIGHT BUTTONS */}
                <div className="flex gap-4 text-xl">

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
                <div className="md:hidden py-6">
                    <ul className="flex flex-col items-center gap-6 text-xl text-slate-700 ">
                        <li>
                            <a href="#home" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a href="#about" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </a>
                        </li>
                        <li>
                            <a href="#service" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCogs} />
                            </a>
                        </li>
                        <li>
                            <a href="#project" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className='hover:bg-slate-400 p-2 rounded-full'>
                                <FontAwesomeIcon icon={faUser} />
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
