import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
    faCode, faCogs, faCopyright, faEnvelope, faHome, faInfoCircle, faLocation, faPhone, faProjectDiagram, faUser
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const currentYear = new Date().getFullYear(); // React way to get current year

    return (
        <section className='flex flex-col items-center justify-center w-full min-h-screen p-6 '>
            <h2 className='font-bold text-3xl uppercase'>Let's connect</h2>
            <div className='flex flex-col md:flex-row justify-evenly items-center w-full mt-8 gap-12'>

                {/* Info / Name Section */}
                <div className='flex flex-col gap-4'>
                    <a href="#home" className='font-bold text-2xl'>JMC</a>
                    <h4 className='text-md'>JOHN MICHAEL CASTOR</h4>

                    <ul className='flex gap-4'>
                        <li><FontAwesomeIcon icon={faHome} /></li>
                        <li><FontAwesomeIcon icon={faInfoCircle} /></li>
                        <li><FontAwesomeIcon icon={faCogs} /></li>
                        <li><FontAwesomeIcon icon={faProjectDiagram} /></li>
                        <li><FontAwesomeIcon icon={faCode} /></li>
                        <li><FontAwesomeIcon icon={faUser} /></li>
                    </ul>

                    <a href="#" className='px-4 py-2 rounded bg-blue-500 text-white transition'>Follow me</a>
                </div>

                {/* Location Section */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold text-2xl uppercase'>Location</h3>
                    <a href="#" className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faLocation} />
                        <span>Sitio, Laylayan ng Boboy San Luis Batangas, 4210</span>
                    </a>
                    <a href="mailto:johnmichaelbcastor@gmail.com" className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>johnmichaelbcastor@gmail.com</span>
                    </a>
                    <a href="tel:+639187766241" className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+63 918 7766 241</span>
                    </a>
                </div>

                {/* Media Links Section */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold text-2xl uppercase'>Media Links</h3>
                    <ul className='flex gap-4'>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    </ul>
                    <span className='flex items-center gap-1 mt-4'>
                        <FontAwesomeIcon icon={faCopyright} /> {currentYear}
                    </span>
                </div>

            </div>
        </section>
    )
}
