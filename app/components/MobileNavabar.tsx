import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'

const MobileNavabar = () => {
    return (
        <div className='px-4 pt-2 absolute text-white md:hidden' >
            <Sheet>
                <SheetTrigger> <img src="/burger.png" alt="" /> </SheetTrigger>
                <SheetContent className='bg-slate-950 bg-opacity-40 border-none text-slate-400' >
                    <SheetHeader>
                        <SheetTitle className='text-slate-400 text-center text-xl'>CONNECT WITH ME</SheetTitle>
                        <SheetDescription className='text-slate-400'>
                            <div className='text-slate-400 flex flex-col  w-[50px] m-auto h-70% justify-evenly   gap-6 ' >
                                <div><Link target='blank' href={'https://twitter.com/piyushsainii'}><img src="/twitterWhite.png" className='cursor-pointer mt-8' width={37} alt="" /></Link></div>
                                <div><Link target='blank' href={'https://github.com/piyushhsainii'}><img src="/githubwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
                                <div><Link target='blank' href={'https://www.linkedin.com/in/piyush-saini-b860ab1bb/'}> <img src="/linkedinwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
                                <div className='h-[100px] border border-white w-[1px] ml-5 ' ></div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavabar