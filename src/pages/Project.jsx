import React from 'react'
import Alumnia from '../assets/image/Alumnia.png'
import Sofa from '../assets/image/Sofa.png'
import Vote from '../assets/image/Vote.png'

export default function Project() {
  return (
    <section>
      <main id='project' className="min-h-screen w-full flex flex-col items-center justify-center">
        <h3 className="text-3xl text-center font-bold uppercase text-slate-800 dark:text-white">
          Project
          <span className="h-1 w-32 bg-slate-400 block rounded mx-auto mt-2"></span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

          {/* Voting System */}
          <div className="flex flex-col items-center p-4 text-center gap-2 w-80 h-full">
            <img src={Vote} alt="Voting System Project" className="w-80" />
            <p className="text-sm text-slate-800 dark:text-white">
              A web-based voting system designed to ensure secure, efficient,
              and user-friendly elections.
            </p>
            <div className='flex gap-4'>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Html</span>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Css</span>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Js</span>
            </div>
          </div>

          {/* Sofa Store */}
          <div className="flex flex-col items-center p-4 text-center gap-2 w-80 h-full">
            <img src={Sofa} alt="Sofa Store Project" className="w-80" />
            <p className="text-sm text-slate-800 dark:text-white">
              An e-commerce website for browsing and purchasing furniture
              with a clean and responsive design.
            </p>
            <div className='flex gap-4'>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Html</span>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Css</span>
              <span className='text-xs px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-full'>Js</span>
            </div>
          </div>

          {/* Alumni System */}
          <div className="flex flex-col items-center p-4 text-center gap-2 w-80 h-full">
            <img src={Alumnia} alt="Alumni System Project" className="w-80" />
            <p className="text-sm text-slate-800 dark:text-white">
              A management system that helps track alumni records and
              maintain communication with graduates.
            </p>
            <div className='flex gap-4'>
              <span className='px-2 py-1 bg-slate-600 rounded-full text-xs hover:bg-slate-500'>PHP</span>
              <span className='px-2 py-1 bg-slate-600 rounded-full text-xs hover:bg-slate-500'>MySQL</span>
              <span className='px-2 py-1 bg-slate-600 rounded-full text-xs hover:bg-slate-500'>Tailwind</span>
              <span className='px-2 py-1 bg-slate-600 rounded-full text-xs hover:bg-slate-500'>Js</span>
            </div>
          </div>

        </div>
      </main>
    </section>
  )
}
