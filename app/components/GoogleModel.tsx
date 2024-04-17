import { GoogleGenerativeAI } from '@google/generative-ai';
import React from 'react'


const apiKey= process.env.NEXT_PUBLIC_API_KEY 

if(!apiKey || apiKey=== undefined){    
    throw new Error ("Could not fetch API key")
}
export const genAI = new GoogleGenerativeAI(apiKey);

 
