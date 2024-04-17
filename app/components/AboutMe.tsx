import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Skills from '../lib/Skills'

const AboutMe = () => {
    return ( 
        <div className='mt-[5rem] h-[auto] w-[375px] md:m-0 md:w-[720px] ' >
            <div className='stroke-yellow-300  text-[3.50rem] md:text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}About Me {"/>"}  </div>

            <div className='w-[85%]  mt-10  m-auto border md:p-2 border-opacity-70 rounded-md border-slate-500 ' >
                <div className='' >
                    <Tabs defaultValue="1" className="max-w-[500px] ">
                        <TabsList className='tabs-content bg-transparent  text-slate-400' >
                            <TabsTrigger value="1" className='tabs-content text-[15px] ' >Skills</TabsTrigger>
                            <TabsTrigger value="2" className='tabs-content text-[15px] ' >Education</TabsTrigger>
                            <TabsTrigger value="3" className='tabs-content text-[15px] ' >Resume</TabsTrigger>
                        </TabsList>
                        <TabsContent value="1">
                            <div className='flex flex-wrap justify-center m-auto' >
                                <Skills />
                            </div>
                        </TabsContent>
                        <TabsContent value="2">
                            <div className='border-slate-700 border bg-slate-800 bg-opacity-65 w-[80%] m-4 p-2' >
                                <div className='p-3' >  🧑‍💻 Education</div>
                                <div className='text-slate-300 px-4 py-2 ' >  <ul><li> Bachelor of Computer Applications | 2021-2024</li></ul> </div>
                                <div className='text-slate-300 px-4 py-2 ' > BCIIT | GGSIPU  </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="3">
                            <div className='border-slate-700 border bg-slate-800 bg-opacity-65 w-[90%] md:m-4 md:p-2' >
                                <div className='p-3' >  🧑‍💻 Resume</div>
                                <div className='text-slate-300 px-4 py-2 flex gap-2'> <div>Download Resume</div> <img src='/download.png' width={22} className='cursor-pointer' ></img> </div>
                                <div className='m-auto  text-center items-center flex justify-center ' >
                        <a href="LatestCV.pdf" target='blank' download={true} >
                        <img className='h-[500px] w-[350px] ' src="LatestCV.png"  alt="" />
                        </a>
                    </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </div>
        </div>
    )
}

export default AboutMe