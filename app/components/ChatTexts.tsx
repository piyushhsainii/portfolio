'use client'
import React, { useState } from 'react'

interface Data {
    role:'model' | 'user',
    text:string
}

const ChatTexts = () => {
    
    const [Text, setText] = useState<Data[]>([{
        role:"model",
        text:"Hello,I am Piyush's Personal AI bot, How can i help you?"
    }])

  return (
  <div className='h-[280px] border-white chat  w-[280px] p-3 overflow-y-auto'>
        <div className='h-[280px]  '>
        <div className='h-auto flex gap-3 text-sm '>
            <img src="/pfp.png"  className='w-[26px] h-[26px] m-1 mx-2'  alt="" />   { Text.map((mess)=><div>{mess.text}</div>) }
        </div>
        </div>
    </div>
  )
}

export default ChatTexts

  {/* <div className='w-full m-auto p-1 border border-slate-300 border-opacity-20'>
        <textarea
            autoFocus name="" style={{ resize: "none" }}
            className='text-white bg-transparent w-[95%] h-[100%]  px-3' id="" cols={23} rows={2}
            onChange={
                (e) => setText((prev) => [...prev, { role: 'user', text: e.target.value }])
            }  
            >

            </textarea>
    </div> */}