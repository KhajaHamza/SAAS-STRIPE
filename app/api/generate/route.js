import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt=`
You are a flashcard creator. Use the following guidelines to generate 10 concise and effective flashcards:

Extract key information from the text, focusing on the most important concepts or facts.
Ensure each flashcard is direct and to the point, with both the front and back limited to one sentence each.
Phrase the front of each flashcard as a clear question, prompt, or statement that requires recall or explanation.
Provide a straightforward and accurate answer or explanation on the back of each card.
Avoid including extraneous details; focus on essential information that supports quick recall.
Maintain variety in the type of prompts (e.g., definitions, facts, concepts) to cover different aspects of the material.
Ensure all content is accurate and relevant to the subject matter.
Generate exactly 10 flashcards in the following JSON format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

export async function POST(req){
    const openai=OpenAI()
    const data=await req.text()

    const completion=await openai.chat.completion.create(
        {
            messages:[
                {role:'system',content:systemPrompt},
                {role:'user',content:data}
            ],
            model:"gpt-4o",
            response_format:{type:'json_object'
            }
        }
    )   
    const flashcards=JSON.parse{completion.choices[0].message.content
    }
    return NextResponse.json(flashcards.flashcard)
}
