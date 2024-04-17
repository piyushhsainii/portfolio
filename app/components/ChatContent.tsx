'use client'
import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"
import { genAI } from './GoogleModel'
import { chatbotPrompt } from './ChatBotPrompt'
import ChatTexts from './ChatTexts'



const ChatContent = () => {

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
    ];

    const model = genAI.getGenerativeModel({ model: "MYBOT", safetySettings });

    async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: chatbotPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "OK" }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });
        

        const msg = message;

        const result = await chat.sendMessage(msg);
        const response = result.response;
        const responsefromApi = response.text();
        setText((prev) => [...prev, { role: 'model', text: responsefromApi }])
        setMessage('')
    }

    interface Data {
        role: 'model' | 'user',
        text: string
    }

    const [text, setText] = useState<Data[]>([{
        role: "model",
        text: "Hello,I am Piyush's Personal AI bot, How can i help you?"
    }])

    const [message, setMessage] = useState<string>('')
    const [response, setResponse] = useState<string>('')

    // useEffect(()=>{
    //     run()
    // },[message])
    
    return (
        <>
            {/* <ChatTexts /> */}
            <div className='h-[280px] border-white chat  w-[280px] p-3 overflow-y-auto'>
                <div className='h-[280px]  '>
                    <div className='h-auto flex flex-col gap-3 text-sm '> deeksha

                        {text.map((mess) =>
                            <div className='flex flex-col'>
                                {mess.role === "model" ? <div className='justify-end'>  <img src="/pfp.png" className='w-[26px] h-[26px] m-1 mx-2' alt="" />  {mess.text} </div> : null}
                                {mess.role === "user" ? <div className='justify-start'>    <img src="/pfp.png" className='w-[26px] h-[26px] m-1 mx-2' alt="" />   {mess.text}  </div> : null}
                            </div>)}
                    </div>
                </div>
            </div>
            <div className='w-full m-auto p-1 border border-slate-300 border-opacity-20'>
                <textarea autoFocus name=""
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            //added by deeksha
                            setText((prev) => [...prev, { role: 'user', text: message }])
                            run()
                        }
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ resize: "none" }} className='text-white bg-transparent w-[95%] h-[100%]  px-3'
                    id="" cols={23} rows={2} />


            </div>
        </>
    )
}

export default ChatContent