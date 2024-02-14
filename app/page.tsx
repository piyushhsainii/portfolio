import Link from 'next/link';
import Content from './Content'

export default function Home() {

  return (
    <div className="w-screen h-screen " >
      <div className='overlay'></div>
        <video src="/bg.mp4" loop autoPlay muted className="h-[100%] w-[100%] object-cover " ></video>
        <div className='content flex  ' >
            <div className='w-[640px]  m-auto border-[0.05px] border-opacity-5 border-white  h-[auto] ' >
              {/* <div className='px-4 pt-2 absolute ' >DRAWER</div> */}
              <Content />    
            </div>
            <div className=' flex-col hidden md:flex h-screen justify-center m-5 gap-6  mt-28' >
              <div><Link target='blank'  href={'https://twitter.com/piyushsainii'}><img src="/twitterWhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
              <div><Link target='blank' href={'https://github.com/piyushhsainii'}><img src="/githubwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
              <div><Link target='blank' href={'https://www.linkedin.com/in/piyush-saini-b860ab1bb/'}> <img src="/linkedinwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
              <div className='h-[100px] border border-white w-[1px] ml-5 ' ></div>
            </div>
        </div>
    </div>
    
  );
}
  