import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ChatContent from './ChatContent'
import { GoogleGenerativeAI, HarmCategory , HarmBlockThreshold } from "@google/generative-ai"
import { genAI } from './GoogleModel'
import { chatbotPrompt } from './ChatBotPrompt'



const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

const model = genAI.getGenerativeModel({ model: "MYBOT",safetySettings});

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
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
  
    const msg = "Hello, I am Piyush's Personal AI bot, how can i help you?";
  
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
    run();

  

const Chat = () => {
  return (
    <div className='  fixed right-5 bottom-5 hidden md:flex z-30 w-[300px]' >
    <Accordion type="single" className='w-[300px]' collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger> 
            <div className='flex gap-4'>
            <div className='p-1 m-2 bg-green-400 rounded-[50%] w-[5px]'></div> 
            <div>Chat with my AI Bot</div>
            </div>    
        </AccordionTrigger>
        <AccordionContent>
          <ChatContent />

        </AccordionContent>
      </AccordionItem>
    </Accordion>
     </div>
  )
}

export default Chat