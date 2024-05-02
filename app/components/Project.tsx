import Link from 'next/link'
import React from 'react'

const Project = (
    { projectName,
        projectImgLink,
        projectLink,
        Description,
        tech
    }:
        {
            projectName: string,
            projectImgLink: string
            projectLink: string,
            Description: string,
            tech: {
                link: string,
                name: string
            }[]
        }) => {

    return (
        <div className='border-slate-700 my-5 m-auto   border w-[500px] min-h-[300px] h-[auto] p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
            <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                <span className='underline'> {projectName} </span><span><a target='blank' href={projectLink}><img className='pt-1 m-auto' width={18} src={"Link2.png"} alt="" /></a></span>
            </div>
            <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
            <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                <img src={projectImgLink} className='cursor-pointer m-auto opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
            </div>
            <div className='m-2 text-sm ml-4 text-center text-slate-300 mt-8'>
                {Description}
            </div>
            <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
            <div className='flex flex-wrap ' >
                {
                    tech.map((tech) => (
                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                            <div className='rounded-md '>  <img src={tech.link} width={24} alt="" /></div> <div>{tech.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Project