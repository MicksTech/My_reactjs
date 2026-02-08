import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import PCV from '../assets/image/PCV.png'

export default function Home() {
    const texts = ['Graphic Designer', 'Web Designer', 'FrontEnd Developer', 'UI/UX Designer']

    const [textIndex, setTextIndex] = useState(0) // which text we're on
    const [displayedText, setDisplayedText] = useState('') // text shown on screen
    const [isDeleting, setIsDeleting] = useState(false) // typing or deleting
    const [speed, setSpeed] = useState(150) // typing speed in ms

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[textIndex]

            if (isDeleting) {
                // delete one character
                setDisplayedText(fullText.substring(0, displayedText.length - 1))
                setSpeed(50) // faster when deleting
            } else {
                // add one character
                setDisplayedText(fullText.substring(0, displayedText.length + 1))
                setSpeed(150) // normal typing speed
            }

            // when word is complete, start deleting after a pause
            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000)
            }

            // when word is deleted, move to next
            if (isDeleting && displayedText === '') {
                setIsDeleting(false)
                setTextIndex((prev) => (prev + 1) % texts.length)
            }
        }

        const timer = setTimeout(handleTyping, speed)

        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, texts, textIndex, speed])

    return (
        <section>
            <main
                id="home"
                className="min-h-screen pb-48 w-full flex flex-col items-center justify-center 
        bg-white dark:bg-gray-900 transition-all gap-2">
                {/* Typing effect */}
                <span className="text-gray-800 dark:text-white text-lg font-medium">
                    {displayedText}
                    <span className="animate-blink">|</span>
                </span>

                {/* Name */}
                <h3 className="text-gray-800 dark:text-white font-bold text-5xl uppercase text-center">
                    Castor, John Michael
                </h3>

                {/* Description */}
                <p className="text-gray-800 dark:text-white w-80 text-center">
                    I am passionate about working on responsive layouts and using modern designs.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <a
                        href="#footer"
                        className="bg-slate-500 px-4 py-2 gap-2 flex rounded text-white hover:bg-slate-700 transition"
                    >
                        Contact me <FontAwesomeIcon icon={faPhone} />
                    </a>

                    <a
                        href={PCV}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-200 px-4 py-2 gap-2 flex hover:bg-slate-400 rounded text-slate-700 transition"
                    >
                        View CV <FontAwesomeIcon icon={faEye} />
                    </a>
                </div>
            </main>
        </section>
    )
}
