import React from 'react'
import ImageAbout from '../assets/image/Image-about.png'

export default function About() {
  return (
      <div className='bg-slate-300 min-h-screen w-full flex flex-col justify-center items-center'>
          <h3 className='text-center mt-6 font-bold text-3xl uppercase text-slate-700 font-sans'>About</h3>
          <div className='flex justify-center items-center h-full w-1/2 gap-4'>
              <img src={ImageAbout} alt=""
              className='w-1/2 h-1/2 drop-shadow-2xl size-16 animate-bounce'/>
              <p className='w-full p-2 text-justify text-slate-700'>
                  I am a fresh graduate of Lemery Colleges, where I earned a Bachelor of Science in
                  Information Technology. I have a strong interest in software development and
                  continuously strive to enhance my technical skills through hands-on projects
                  and self-learning.
              </p>
          </div>
    </div>
  )
}
