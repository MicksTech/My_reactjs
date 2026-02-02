import React from 'react'

export default function Skills() {
  return (
      <section className='w-full min-h-screen flex flex-col items-center justify-center' id='skills' data-aos='zoom-in'>
          <h2 className='font-bold uppercase text-3xl'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8'>
              <div className='w-64 h-full shadow-md rounded p-4 transition-transform duration-500 ease-in-out hover:scale-110'>
                  <h2 className='font-bold uppercase text-center'>FrontEnd / Frameworks</h2>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-4'>
                      <span className='text-xs text-center'>HTML</span>
                      <span className='text-xs text-center'>CSS</span>
                      <span className='text-xs text-center'>BOTSTRAP</span>
                      <span className='text-xs text-center'>TAILWIND</span>
                      <span className='text-xs text-center'>JAVASCRIPT</span>
                      <span className='text-xs text-center'>REACT</span>
                  </div>
              </div>
              <div className='w-64 h-full shadow-md rounded p-4 transition-transform duration-500 ease-in-out hover:scale-110'>
                  <h2 className='font-bold uppercase text-center'>BackEnd / Frameworks</h2>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-2 mt-4'>
                      <span className='text-xs text-center'>PHP</span>
                      <span className='text-xs text-center'>MYSQL</span>
                      <span className='text-xs text-center'>LARAVEL</span>
                      <span className='text-xs text-center'>MOONGODB</span>
                  </div>
              </div>
              <div className='w-64 h-full shadow-md rounded p-4 transition-transform duration-500 ease-in-out hover:scale-110'>
                  <h2 className='text-center font-bold uppercase'>Other</h2>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 mt-4 gap-4'>
                      <span className='text-xs text-center'>PHOTOSHOP</span>
                      <span className='text-xs text-center'>FIGMA</span>
                      <span className='text-xs text-center'>GITHUB</span>
                      <span className='text-xs text-center'>VERCEL</span>
                  </div>
              </div>
          </div>
    </section>
  )
}
