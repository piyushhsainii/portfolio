import React from 'react'

const Skills = () => {
    const Skills = [
        {
            imgURL: "/js.png",
            Name:"JavaScript"
        },
        {
            imgURL: "/typescript.png",
            Name:"TypeScript"
        },
        {
            imgURL:"/node-js.png",
            Name:"Node JS"
        }, 
       
        {
            imgURL: "/next.png",
            Name:"Next JS"
        },
        {
            imgURL: "/react.png",
            Name:"React"
        },
        {
            imgURL: "/expressw.png",
            Name:"Express"
        },   
        {
            imgURL: "/redis.png",
            Name:"Redis "
        },  
        {
            imgURL:"/mongodb.png",
            Name:"MongoDB"
        },   
        {
            imgURL:"/postgres.png",
            Name:"Postgres"
        },   
         {
            imgURL: "/tailwind.png",
            Name:"Tailwind "
        },  
        {
            imgURL:"/prismaw.png",
            Name:"Prisma"
        },   
          {
            imgURL: "/vercel2.png",
            Name:"Vercel"
        },
        {
            imgURL:"/mui.png",
            Name:"Material UI"
        },   
        {
            imgURL:"/shadcn.png",
            Name:"Shadcn"
        },   
        {
            imgURL:"/git.png",
            Name:"Git"
        },   
        {
            imgURL:"/githubicon.png",
            Name:"GitHub"
        },   
        {
            imgURL:"/postman.png",
            Name:"Postman"
        },   
        {
            imgURL:"/photoshop.png",
            Name:"Photoshop"
        },   
        {
            imgURL:"/ws.png",
            Name:"Web Sockets"
        },   
        
        {
            imgURL:"/docker.png",
            Name:"Docker"
        },   
       
    ]
    return (
        Skills.map((skills)=>(
            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[130px] flex justify-around gap-2 items-center m-3  flex-wrap hover:bg-slate-800 p-2 transition-all duration-200 ' >
                <div className='rounded-md m-aut '>  <img src={skills.imgURL} width={24} alt="" /></div> <div>{skills.Name}</div>
            </div>
            ))
    )
}

export default Skills