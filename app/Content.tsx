'use client'
import React, { useState } from 'react'
import SplitType from "split-type";
import gsap from "gsap";
import { useEffect} from "react";

const Body = () => {
    const [Mounted, setMounted] = useState(false)
    useEffect(() => {
    setMounted(true)
     const myName = new SplitType('#name');
     
     gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.5,
        })
    }, [])

    return (
       <div className="h-screen w-screen overflow-y-auto " >
        <div className='p-3 px-5 mt-12 font-bold text-xl text-color' >
            Hi, I'm
        </div>
        <div className='Char p-3 h-[auto] px-5 font-bold Name-color  ' >
             <h2 id='name' className={`text-8xl clipPath`}> Piyush </h2>
        </div>
        <div className='text-2xl my-4 font-bold px-5 p-3 flex text-color ' >
            <span>Transforming <span className='text-yellow-700' >Caffeine</span>  </span> <img src="/coffee-cup.png" width={22} className='mx-2'  alt="" />  into {' <'}  <span className='text-green-500' >{'Code '} </span>{'/>'} 
        </div>
        <div className=' max-w-[600px] px-5 p-2 desc-color text-[15px] my-4  ' >
         I'm a Full-Stack Developer with a passion for DevOps. I always aim for the best code quality and smooth coding. I'm excited about using new technologies in my projects. 
        </div>
        <div className='mt-[5rem] h-[70vh] w-[640px] border-x border-white' >
            <div className='stroke-yellow-300 text-[5.60rem] font-bold z-0 opacity-80  text-transparent' style={{strokeWidth: "1px", WebkitTextStrokeWidth:"1.2px", WebkitTextStrokeColor:"yellow" }} > {"<"}About Me {"/>"}  </div>
            <div className='w-[80%] h-auto m-auto border border-opacity-70 border-slate-500 ' >
                
            </div>
        </div>
     </div>
    )
}

export default Body 