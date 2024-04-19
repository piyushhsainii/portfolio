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


    return (
        <>
            <div className='h-80  chat  w-[280px] p-3 overflow-y-auto'>
                <div className='  '>
                    <div className='h-auto flex flex-col  gap-3 text-sm '>

                        {text.map((mess) =>
                            <div className='flex flex-col' >
                                {mess.role === "model" ? <div className=' flex justify-start items-center '>
                                    <img src="/pfp.png" className='w-[26px] h-[26px] m-1 mx-2' alt="" />
                                    <div className='bg-white rounded-md text-black px-2 p-1 text-sm' >{mess.text}</div> </div> : null}
                                {mess.role === "user" ? <div className=' flex justify-end items-center'>
                                    <div className='bg-blue-600 rounded-md text-white px-2 p-1 text-sm'>  {mess.text}</div>
                                    <img src="/pfp.png" className='w-[26px] h-[26px] m-1 mx-2' alt="" />   </div> : null}
                            </div>)}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <textarea autoFocus name=""
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            //added by deeksha
                            setText((prev) => [...prev, { role: 'user', text: message }])
                            run()
                            setMessage("")
                        }
                    }}
                    value={message}
                    placeholder='ask me something about this portfolio?'
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ resize: "none" }}
                    className='text-white bg-transparent mx-2 mr-4 h-[100%]  w-[95%] '
                    id="" cols={29} rows={2} />


            </div>
        </>
    )
}

export default ChatContent