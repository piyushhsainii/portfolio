import Content from './Content'
import ChatBot from './components/Chat';
import MobileNavabar from './components/MobileNavabar';
import SocialLinks from './components/SocialLinks';

export default function Home() {

  return (
    <div className="w-screen h-screen  " >
      <div className='overlay '> </div>
      <video src="/bg.mp4" loop autoPlay muted playsInline className="h-[100%] w-[100%] object-cover " ></video>
      <div className='content flex  m-auto justify-end   ' >
        <div className='w-full m-auto  h-[auto] ' >
          <SocialLinks />
          <MobileNavabar />
          <Content />
        </div>
        <div className='absolute bottom-2 right-2 w-[300px] flex items-end'>
          <ChatBot />
        </div>
      </div>
    </div>

  );
}
