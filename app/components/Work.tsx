'use client'
import React from 'react';
import Project from './Project';

const Work = () => {
  return (
    <div className='mt-[5rem] h-auto w-[330px] md:w-[1000px] m-auto'>
      <div className='stroke-yellow-300 text-center  text-[2rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
        {"<"}Work {"/>"}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 m-2 justify-center'>

        <Project
          projectName='Sum It Up'
          projectImgLink='/SumItUp.png'
          Description='Summary Youtube Vidoes with AI🙌'
          key={2}
          projectLink='https://x.com/piyushsainii/status/1805619968391651342'
          tech={[
            { link: "next.png", name: "Next JS" },
            { link: "vercel.png", name: "Vercel" },
            { link: "shadcn.png", name: "Shadcn" },
          ]}
        />

        <Project
          projectName='Chess'
          projectImgLink='/Chess.png'
          Description='Introducing Chess ♟, where every move tells a story'
          key={3}
          projectLink='https://play-chess.vercel.app/'
          tech={[
            { link: "react.png", name: "React JS" },
            { link: "ws.png", name: "Web Sockets" },
            { link: "expressw.png", name: "Express" },
            { link: "typescript.png", name: "TypeScript" },
          ]}
        />

        <Project
          projectName='Horsepower Cartel'
          projectImgLink='horsepower.png'
          Description='Introducing Horsepower Cartel 🚀  Where Luxury Meets Innovation 🙌'
          key={1}
          projectLink='https://horsepower-cartel.vercel.app/'
          tech={[
            { link: "next.png", name: "Next JS" },
            { link: "postgres.png", name: "MongoDB" },
            { link: "typescript.png", name: "Vercel" },
            { link: "shadcn.png", name: "Shadcn" },
            { link: "prismaw.png", name: "Prisma" },
            { link: "aceternity.png", name: "Aceternity" },
            { link: "docker.png", name: "Docker" },
            { link: "redis.png", name: "Redis" },
          ]}
        />

        {/* <Project
          projectName='Greendmind E-Commerce Store'
          projectImgLink='/project1.png'
          Description='Introducing Greenmind Plant Store 🙌'
          key={2}
          projectLink='https://greenmind-store-ecommerce.vercel.app'
          tech={[
            { link: "next.png", name: "Next JS" },
            { link: "mongodb.png", name: "MongoDB" },
            { link: "vercel.png", name: "Vercel" },
            { link: "shadcn.png", name: "Shadcn" },
          ]}
        /> */}

      </div>
    </div>
  );
}

export default Work;
