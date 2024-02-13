'use client'
import React, { Suspense, useState } from 'react'
import SplitType from "split-type";
import gsap from "gsap";
import { useEffect} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Skills from './Skills';
import GitHubCalendar, { Props } from 'react-github-calendar';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Link from 'next/link';

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
            Hi,I'm
        </div>
        <div className='Char p-3 pt-0 h-[auto] px-5 font-bold Name-color  ' >
             <h2 id='name' className={`text-8xl clipPath`}> Piyush Saini </h2>
        </div>
        <div className='text-2xl my-4 font-bold px-5 p-3 flex text-color ' >
            <span> I Transform <span className='text-yellow-700' >Caffeine</span>  </span> <img src="/coffee-cup.png" width={22} className='mx-2'  alt="" />  into {' <'}  <span className='text-green-500' >{'Code '} </span>{'/>'} 
        </div>
        <div className=' max-w-[720px] text-slate-200 px-5 p-2 desc-color text-[15px] my-4  ' >
         I'm a Full-Stack Developer with a passion for DevOps. I always aim for the best code quality and smooth coding. I'm excited about using new technologies in my projects. 
        </div>

         {/* GITHUB  */}
         <div className='w-max-[720px] my-4 mx-2 py-4 mt-6' >
            <Suspense fallback="Loadin.." >
            <GitHubCalendar
                    username={'piyushhsainii'}
                    blockSize={9}
                    // colorScheme={theme === "dark" ? "dark" : "light"}
                    />
                    </Suspense>
            </div>

        {/* ABOUT ME */}

        <div className='mt-[5rem] h-[auto]  w-[720px] ' >
            <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{strokeWidth: "1.5px", WebkitTextStrokeWidth:"1.9px", WebkitTextStrokeColor:"yellow" }} > {"<"}About Me {"/>"}  </div>
           
            <div className='w-[85%]  mt-10  m-auto border p-2 border-opacity-70 rounded-md border-slate-500 ' >
                <div className='' >
                <Tabs defaultValue="1" className="max-w-[500px] ">
                    <TabsList className='tabs-content bg-transparent  text-slate-400' >
                        <TabsTrigger value="1" className='tabs-content text-[15px] ' >Skills</TabsTrigger>
                        <TabsTrigger value="2" className='tabs-content text-[15px] ' >Education</TabsTrigger>
                    </TabsList>
                    <TabsContent value="1">
                        <div className='flex flex-wrap justify-center m-auto' >
                            <Skills/>
                        </div>
                    </TabsContent>
                    <TabsContent value="2">
                        <div className='border-slate-700 border bg-slate-800 bg-opacity-65 w-[80%] m-4 p-2' >
                            <div className='p-3' >  🧑‍💻 Education</div>
                            <div className='text-slate-300 px-4 py-2 ' >  <ul><li> Bachelor of Computer Applications | 2021-2024</li></ul> </div>
                            <div className='text-slate-300 px-4 py-2 ' > BCIIT | GGSIPU  </div>
                        </div>
                    </TabsContent>
                </Tabs>
                </div>

            </div>
        </div>

        {/* projects */}

        <div className='mt-[5rem] h-[auto]  w-[720px] ' >
        <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{strokeWidth: "1.5px", WebkitTextStrokeWidth:"1.9px", WebkitTextStrokeColor:"yellow" }} > {"<"}Work {"/>"}   </div>
         <div className='flex flex-wrap justify-center ' >
        {/* PROJECT 1 */}
        <Link href={'https://greenmind-store-ecommerce.vercel.app/'}>
                <div className='border-slate-700 border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center ' >
                        Greendmind E-Commerce Store
                        </div>
                        <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                        <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                         <img src="/project1.png"  className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                        </div>
                            <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                            <div className='flex flex-wrap w-[400px]' >
                                <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/nextjs.png"} width={24} alt="" /></div> <div>{"Next JS"}</div>
                                </div>
                                <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/mongodb.png"} width={24} alt="" /></div> <div>{"MongoDB"}</div>
                                </div>
                                <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/vercel.png"} width={24} alt="" /></div> <div>{"Vercel"}</div>
                                </div>
                                <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                        <div className='rounded-md '>  <img src={"/shadcn.png"} width={24} alt="" /></div> <div>{"Shadcn"}</div>
                                </div>
                            </div>
                    </div>
                </Link>
            {/* project 2 */}
                <Link href={'https://my-funds-sage.vercel.app'}>
                <div className='border-slate-700 border rounded-md w-[330px] min-h-[330px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center  ' >
                        MyFunds - Wallet App
                        </div>
                        <hr className='w-[70%] mb-4  text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                        <div className='w-[95%]  object-cover  h-[auto] m-auto '  >
                             <img src="/project2.png"  className='cursor-pointer   opacity-75 hover:opacity-100 h-[10rem] object-cover transition-all duration-200 ' alt="" />
                        <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH USED </div>
                            <div className='flex flex-wrap w-[400px]' >
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                            <div className='rounded-md '>  <img src={"/react.png"} width={24} alt="" /></div> <div>{"React"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                            <div className='rounded-md '>  <img src={"/postgres.png"} width={24} alt="" /></div> <div>{"Postgres"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                            <div className='rounded-md '>  <img src={"/prisma.png"} width={24} alt="" /></div> <div>{"Prisma"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                            <div className='rounded-md '>  <img src={"/express.png"} width={24} alt="" /></div> <div>{"Express JS"}</div>
                                    </div>
                                    <div className=' cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3 flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                                            <div className='rounded-md '>  <img src={"/typescript.png"} width={24} alt="" /></div> <div>{"Typescript"}</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Link>    

         </div>
    </div>

        {/* CONTACT */}

            <div className='mt-[5rem] h-[auto]  w-[750px] border-x border-white' >
                <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{strokeWidth: "1.5px", WebkitTextStrokeWidth:"1.9px", WebkitTextStrokeColor:"yellow" }} > {"<"}Contact me {"/>"}   </div>
                
            </div>


     </div>
    )
}

export default Body 