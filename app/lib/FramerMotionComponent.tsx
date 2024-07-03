"use client"
import React, { Suspense, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion';

const FramerMotionComponent = () => {
    const name = `Piyush Saini`

    const defaultAnimations = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1
            }
        },
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })


    return (
        <div className='  pt-0 h-[auto] px-5 font-bold Name-color w-[500px]  ' >
            <h2 className={`text-7xl md:8xl `}> <span className='sr-only' >{name}</span>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    aria-hidden
                    ref={ref}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {name.split(" ").map((word) => (
                        <span className='inline-block' >
                            {word.split('').map((char) => (<motion.span className='inline-block' variants={defaultAnimations}> {char}  </motion.span>))}
                            <span className='inline-block'> &nbsp; </span>
                        </span>
                    ))}
                </motion.span>
            </h2>
        </div>
    )
}

export default FramerMotionComponent