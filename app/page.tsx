import Content from './Content'

export default function Home() {

  return (
    <div className="w-screen h-screen " >
      <div className='overlay'></div>
        <video src="/bg.mp4" loop autoPlay muted className="h-[100%] w-[100%] object-cover " ></video>
        <div className='content  ' >
            <div className='w-[640px]  m-auto border border-white  h-[auto] ' >
              <Content />    
            </div>
        </div>
    </div>
    
  );
}
  