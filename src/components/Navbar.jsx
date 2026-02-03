import React, { useState } from 'react'
import Logo from '../assets/image/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faCircleQuestion,
    faSun,
    faMoon,
    faUser
} from '@fortawesome/free-regular-svg-icons'
import { faBars, faCogs, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ isDark, setDark }) {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="flex h-16 px-6 items-center justify-around w-full shadow-md sticky top-0 z-10 bg-white dark:bg-gray-900 transition-all">

            {/* Logo */}
            <a href="#home">
                <img src={Logo} alt="Logo" className="w-32" />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 items-center">
                <li>
                    <a href="#home" className="text-gray-800 dark:text-white">
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-gray-800 dark:text-white">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </a>
                </li>
                <li>
                    <a href="#service" className="text-gray-800 dark:text-white">
                        <FontAwesomeIcon icon={faCogs} />
                    </a>
                </li>
                <li>
                    <a href="#footer" className="text-gray-800 dark:text-white">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </li>
            </ul>

            {/* Right controls */}
            <div className="flex items-center space-x-4">

                {/* Dark mode */}
                <button
                    onClick={() => setDark(prev => !prev)}
                    className="text-gray-800 dark:text-white cursor-pointer"
                >
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="md:hidden text-gray-800 dark:text-white cursor-pointer"
                >
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full shadow-md bg-white dark:bg-gray-900 md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-6">
                        <li>
                            <a href="#home" onClick={() => setOpen(false)} className="text-gray-800 dark:text-white">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setOpen(false)} className="text-gray-800 dark:text-white">
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </a>
                        </li>
                        <li>
                            <a href="#footer" onClick={() => setOpen(false)} className="text-gray-800 dark:text-white">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}

        </header>
    )
}
