import React, { Fragment } from 'react'
import Link from 'next/link';

const Work = () => {
    return (
        <div className='mt-[5rem] h-[auto] w-[360px]  md:w-[720px] ' >
            <div className='stroke-yellow-300 text-[5rem] md:text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Work {"/>"}   </div>
            <div className='flex flex-col  justify-center m-auto md:flex-row' >
                {/* PROJECT 1 */}
                {/* <Link href={'https://greenmind-store-ecommerce.vercel.app/'}> */}
                    <div className='border-slate-700   border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                        <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                            <span>Greendmind E-Commerce Store </span><span><a target='blank' href="https://greenmind-store-ecommerce.vercel.app/"><img className='pt-1' width={18} src="link.png" alt="" /></a></span>
                        </div>
                        <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                        <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                            <img src="/project1.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                        </div>
                        <div className='m-2 text-sm ml-4 text-center text-slate-300 mt-8'>
                        Introducing Greenmind Plant Store 🙌
                        </div>
                        <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                        <div className='flex flex-wrap w-[400px]' >
                            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/nextjs.png"} width={24} alt="" /></div> <div>{"Next JS"}</div>
                            </div>
                            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/mongodb.png"} width={24} alt="" /></div> <div>{"MongoDB"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/vercel.png"} width={24} alt="" /></div> <div>{"Vercel"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/shadcn.png"} width={24} alt="" /></div> <div>{"Shadcn"}</div>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
                {/* project 2 */}
                <Fragment>
                <div className='border-slate-700   border w-[330px] min-h-[300px] h-[auto] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                        <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                            <span>Horsepower Cartel </span><span><a target='blank' href="https://horsepower-cartel.vercel.app"><img className='pt-1' width={18} src="link.png" alt="" /></a></span>
                        </div>
                        <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                        <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                            <img src="/horsepower.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                        </div>
                        <div className='m-2 text-sm ml-4 text-center text-slate-300 mt-8'>
                        Introducing Horsepower Cartel 🚀  Where Luxury Meets Innovation 🙌
                        </div>
                        <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                        <div className='flex flex-wrap w-[400px]' >
                            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/nextjs.png"} width={24} alt="" /></div> <div>{"Next JS"}</div>
                            </div>
                            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/postgres.png"} width={24} alt="" /></div> <div>{"MongoDB"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/typescript.png"} width={24} alt="" /></div> <div>{"Vercel"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/shadcn.png"} width={24} alt="" /></div> <div>{"Shadcn"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/prisma.png"} width={24} alt="" /></div> <div>{"Prisma"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/aceternity.png"} width={24} alt="" /></div> <div>{"Aceternity"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                <div className='rounded-md '>  <img src={"/docker.png"} width={24} alt="" /></div> <div>{"Docker"}</div>
                            </div>
                        </div>
                    </div>
                </Fragment>

            </div>
        </div>
    )
}

export default Work