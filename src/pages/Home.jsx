import React, { useEffect, useState } from 'react'

export default function Home() {

    const texts = [
        "Graphic Designer",
        "Frontend Developer",
        "Simple People"
    ]

    const [textIndex, setTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[textIndex]
        let typingSpeed = isDeleting ? 60 : 120

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing
                setDisplayText(currentText.substring(0, displayText.length + 1))

                if (displayText === currentText) {
                    setTimeout(() => setIsDeleting(true), 1000)
                }
            } else {
                // deleting
                setDisplayText(currentText.substring(0, displayText.length - 1))

                if (displayText === "") {
                    setIsDeleting(false)
                    setTextIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, textIndex])

    return (
        <div className="min-h-screen bg-slate-300 flex flex-col justify-center items-center w-full gap-8">

            {/* TYPING EFFECT */}
            <p className="text-xl -mt-40 text-slate-700 h-6">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>

            <h3 className="font-bold text-5xl uppercase text-center text-slate-700">
                John Michael Castor
            </h3>

            <div className="flex gap-4">
                <a
                    href="#"
                    className="bg-blue-500 px-4 py-2 text-white rounded
          transition-transform duration-500 ease-in-out
          hover:scale-110 hover:bg-blue-600"
                >
                    Follow me
                </a>

                <a
                    href="#"
                    className="bg-blue-500 px-4 py-2 text-white rounded
          transition-transform duration-500 ease-in-out
          hover:scale-110 hover:bg-blue-600"
                >
                    View CV
                </a>

                <a
                    href="#"
                    className="bg-blue-500 px-4 py-2 text-white rounded
          transition-transform duration-500 ease-in-out
          hover:scale-110 hover:bg-blue-600"
                >
                    Project
                </a>
            </div>
        </div>
    )
}
