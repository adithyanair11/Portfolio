import React from 'react'
import {motion} from 'framer-motion'
import ComputersCanvas from './canvas/Computers' 

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div className='sm:w-[450px]'>
          <p className='sm:text-[3rem] text-[2rem] font-bold'>
            Hi, I'm <span className='text-violet-700'>Adithya</span>
          </p>
          <p className='sm:text-[1.3rem] text-[1rem] text-white mt-2'>I develop full stack web applications and make them look good
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero