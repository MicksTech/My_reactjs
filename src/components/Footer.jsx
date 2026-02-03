import { faAirbnb, faFacebook, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    
    const currentDate = new Date().getFullYear();
    return (
        <section>
            <main id='footer' className='flex flex-col items-center w-full h-full'>
                <h3 className='text-2xl uppercase text-slate-800 dark:text-white'>Let's Connect
                    <span>
                        <FontAwesomeIcon icon={faSignal} className='text-md' />
                    </span>
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5  gap-4 my-4'>
                    <a href="https://www.facebook.com/johnmichael.b.castor.58" target='_blank' className='px-4 py-2 gap-2 flex bg-slate-500 hover:bg-slate-600 text-white rounded'>
                        Facebook
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.youtube.com/@m-castorjohnmichaelbalasbs3039" target='_blank' className='px-4 py-2 gap-2 flex bg-slate-300 hover:bg-slate-400 rounded text-slate-700'>
                        Youtube
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.instagram.com/mickstech7/" target='_blank' className='px-4 py-2 gap-2 flex bg-slate-300 hover:bg-slate-400 rounded text-slate-700'>
                        Instagram
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://github.com/MicksTech" target='_blank' className='px-4 py-2 gap-2 flex bg-slate-300 hover:bg-slate-400 rounded text-slate-700'>
                        Github
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    
                    <a href="" className='px-4 py-2 gap-2 flex bg-slate-500 hover:bg-slate-600 text-white rounded'>
                        Send Email
                        <FontAwesomeIcon icon={faAirbnb} />
                    </a>
                </div>
                
                <span className='my-4 text-slate-800 dark:text-white'>
                    <FontAwesomeIcon icon={faCopyright} />
                    {currentDate} Michael. All rights reserved
                </span>
            </main>
        </section>
    )
}
