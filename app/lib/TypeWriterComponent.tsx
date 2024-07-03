"use client"
import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter';

const TypeWriterComponent = () => {
  return (
    <div className='text-xl md:text-2xl w-[500px]  my-4 font-bold px-5 p-3 flex flex-wrap text-color w-[auto] ' >
      <span className='min-w-[223px]' > I Transform <span className='text-yellow-700' > Caffeine</span>  </span> <img src="/coffee-cup.png" className='mx-3 w-[30px] h-[30px]' alt="" />  into {' <'}  <span className='text-green-500' ><Typewriter typeSpeed={60} words={[`Code`]} loop={false} /></span> {'/>'} <span className='text-green-500'><Cursor /></span>
    </div>

  )
}

export default TypeWriterComponent