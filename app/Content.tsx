import AboutMe from './components/AboutMe';
import Work from './components/Work';
import GitHubCalendarComponent from './lib/GitHubCalendar';
import TypeWriterComponent from './lib/TypeWriterComponent';
import FramerMotionComponent from './lib/FramerMotionComponent';
import Footer from './components/Footer';

const Body = () => {
    return (
        <div className="h-screen w-[780px] chat overflow-y-auto   " >
            <div className='p-3 px-5 mt-12 font-bold text-xl text-color' >
                Hi,I'm
            </div>
                <FramerMotionComponent/>
                <TypeWriterComponent/>
                <div className=' max-w-[720px] text-slate-200 px-5 p-2 desc-color  text-[13px] md:text-[15px] my-4  ' >
                    A Full-Stack Developer based in Delhi. I always aim for the best code quality and smooth coding. I'm excited about using new technologies in my projects.
                </div>
                <GitHubCalendarComponent/>
                <AboutMe />
                <Work/>
            {/* CONTACT */}
            {/* <div className='mt-[5rem] h-[auto]  w-[750px] border-x border-white' >
                     <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Contact me {"/>"}   </div>
               </div> */}
               <Footer/>
        </div>
    )
}

export default Body 