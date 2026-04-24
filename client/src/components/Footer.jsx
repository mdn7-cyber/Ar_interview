import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    <div className='relative mt-10 px-4 pb-10'>

      {/* Glow Effects */}
      <div className="absolute w-[250px] h-[250px] bg-purple-500/20 blur-[120px] bottom-0 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-cyan-400/20 blur-[120px] bottom-0 right-10"></div>

      <div className='w-full max-w-6xl mx-auto 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        rounded-3xl shadow-xl 
        py-10 px-6 text-center relative z-10'>

        {/* Logo */}
        <div className='flex justify-center items-center gap-3 mb-4'>
          <div className='bg-gradient-to-tr from-purple-500 to-cyan-400 text-white p-3 rounded-xl shadow-lg'>
            <BsRobot size={18} />
          </div>

          <h2 className='font-semibold text-lg text-white tracking-wide'>
            InterviewIQ<span className='text-gray-400'>.AI</span>
          </h2>
        </div>

        {/* Description */}
        <p className='text-gray-300 text-sm max-w-xl mx-auto leading-relaxed'>
          AI-powered interview preparation platform designed to improve
          communication skills, technical depth, and professional confidence.
        </p>

        {/* Divider */}
        <div className='w-full h-[1px] bg-white/10 my-6'></div>

        {/* Bottom */}
        <p className='text-gray-400 text-xs'>
          © {new Date().getFullYear()} InterviewIQ.AI • All rights reserved
        </p>

      </div>
    </div>
  )
}

export default Footer