import React from 'react'

export default function Skills() {
  return (
      <section className='w-full min-h-screen flex flex-col items-center justify-center' id='skills' data-aos='zoom-in'>
          <h2 className='font-bold uppercase text-3xl'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8'>
              <div className='w-64 h-FULL border rounded p-4'>
                  <h2 className='font-bold uppercase text-center'>FrontEnd / Frameworks</h2>
                  <p className='text-justify mt-2 text-sm'>
                      I specialize in building modern, responsive, and user-friendly interfaces using
                      frontend technologies and frameworks. I focus on creating clean UI designs, smooth
                      user interactions, and optimized performance. With experience in tools like React,
                      Tailwind CSS, and Bootstrap, I develop scalable and maintainable web applications
                      that provide a seamless user experience across all devices.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                      <span className='text-xs border p-1 text-center rounded-md'>HTML</span>
                      <span className='text-xs border p-1 text-center rounded-md'>CSS</span>
                      <span className='text-xs border p-1 text-center rounded-md'>BOTSTRAP</span>
                      <span className='text-xs border p-1 text-center rounded-md'>TAILWIND</span>
                      <span className='text-xs border p-1 text-center rounded-md'>JAVASCRIPT</span>
                      <span className='text-xs border p-1 text-center rounded-md'>REACT</span>
                  </div>
              </div>
              <div className='w-64 h-full border rounded p-4'>
                  <h2 className='font-bold uppercase text-center'>BackEnd / Frameworks</h2>
                  <p className='text-sm text-justify mt-2'>
                      I create robust and scalable backend systems using modern frameworks, focusing
                      on secure data handling, efficient server logic, and seamless integration with
                      frontend applications.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
                      <span className='text-xs border p-1 text-center rounded-md'>PHP</span>
                      <span className='text-xs border p-1 text-center rounded-md'>MYSQL</span>
                      <span className='text-xs border p-1 text-center rounded-md'>LARAVEL</span>
                      <span className='text-xs border p-1 text-center rounded-md'>MOONGODB</span>
                  </div>
              </div>
              <div className='w-64 h-full border rounded p-4 '>
                  <h2 className='text-center font-bold uppercase'>Other</h2>
                  <p className='text-sm text-justify mt-2'>
                      I am proficient in using a variety of design and development tools to streamline
                      my workflow and deliver high-quality projects. I use Photoshop for image editing
                      and graphics creation, Figma for UI/UX design and prototyping, GitHub for version
                      control and collaboration, and Vercel for seamless deployment of web applications.
                      These tools help me efficiently design, manage, and launch professional web projects.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4'>
                      <span className='text-xs border p-1 text-center rounded-md'>PHOTOSHOP</span>
                      <span className='text-xs border p-1 text-center rounded-md'>FIGMA</span>
                      <span className='text-xs border p-1 text-center rounded-md'>GITHUB</span>
                      <span className='text-xs border p-1 text-center rounded-md'>VERCEL</span>
                  </div>
              </div>
          </div>
    </section>
  )
}
