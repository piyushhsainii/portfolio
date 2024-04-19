import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ChatContent from './ChatContent'



const Chat = () => {
  return (
    <div className='    hidden md:flex items-end z-30 w-[300px] max-h-[4400px]' >
      <Accordion type="single" className='w-[300px]' collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className='flex gap-4'>
              <div className='p-1 m-2 bg-green-400 rounded-[50%] w-[5px]'></div>
              <div>Chat with my AI Bot</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className='flex flex-col justify-between h-80'>
              <ChatContent />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Chat