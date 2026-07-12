// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai"
// import { AIMessage, HumanMessage,SystemMessage } from "langchain";

// const geminimodel = new ChatGoogleGenerativeAI({
//     model: "gemini-2.5-flash-lite",
//     // model: "gemini-1.5-flash",
//     apiKey: process.env.GEMINI_API_KEY
// });


// const mistralModel = new ChatMistralAI({
//     model: "mistral-small-latest",
//     apiKey: process.env.MISTRAL_API_KEY
// })

// export async function generateResponse(messages) {
//      if (!Array.isArray(messages)) {
//         messages = [{ role: "user", content: messages }];
//     }
//     const response = await geminimodel.invoke(messages.map(msg => {
//         if (msg.role == "user") {
//             return new HumanMessage(msg.content)
//         } else if (msg.role == "ai") {
//             return new AIMessage(msg.content)
//         } else if (msg.role === "system") {
//             return new SystemMessage(msg.content); // ✅ MOST IMPORTANT FIX
//         }
//     }));

//     return response.text;
// }

// export async function generateChatTitle(message) {
//     const response = await mistralModel.invoke([
//         new SystemMessage(`You are a helpful assistant that generates concies and descriptive titles for chat conversations.
        
//         User will provided you with the frist message of a chat conersation, and you will generate a title that captures the essence of the conversation in 2-4 words. 
//         The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.
//        `),

//     new HumanMessage(`
//         Generate a title for a chat conversation based on the following frist message:
//         "${message}
//         `)
//     ])
//     return response.text;
// }



// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai";
// import { AIMessage, HumanMessage, SystemMessage } from "langchain";

// const geminimodel = new ChatGoogleGenerativeAI({
//     model: "gemini-2.5-flash-lite",
//     apiKey: process.env.GEMINI_API_KEY
// });

// const mistralModel = new ChatMistralAI({
//     model: "mistral-small-latest",
//     apiKey: process.env.MISTRAL_API_KEY
// });

// export async function generateResponse(messages) {

//     // ✅ safety
//     if (!Array.isArray(messages)) {
//         messages = [{ role: "user", content: messages }];
//     }

//     const formatted = messages
//         .map(msg => {
//             if (msg.role === "user") return new HumanMessage(msg.content);
//             if (msg.role === "assistant") return new AIMessage(msg.content);
//             if (msg.role === "system") return new SystemMessage(msg.content);
//         })
//         .filter(Boolean);

//     //console.log("Formatted Messages:", formatted)
//     const response = await geminimodel.invoke(formatted);

//     return response.content;
// }

// export async function generateChatTitle(message) {
//     const response = await mistralModel.invoke([
//         new SystemMessage(`Generate a short 2-4 word title for the conversation.`),
//         new HumanMessage(message)
//     ]);

//     return response.content;
// }







// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai"
// import { HumanMessage, SystemMessage, AIMessage, tool, createAgent } from "langchain";
// import * as z from "zod";
// import { searchInternet } from "./internet.service.js";

// const geminiModel = new ChatGoogleGenerativeAI({
//     model: "gemini-flash-latest",
//     apiKey: process.env.GEMINI_API_KEY
// });

// const mistralModel = new ChatMistralAI({
//     model: "mistral-medium-latest",
//     apiKey: process.env.MISTRAL_API_KEY
// })

// const searchInternetTool = tool(
//     searchInternet,
//     {
//         name: "searchInternet",
//         description: "Use this tool to get the latest information from the internet.",
//         schema: z.object({
//             query: z.string().describe("The search query to look up on the internet.")
//         })
//     }
// )

// const agent = createAgent({
//     model: mistralModel,
//     tools: [ searchInternetTool ],
// })

// export async function generateResponse(messages) {
//     console.log(messages)

//     const response = await agent.invoke({
//         messages: [
//             new SystemMessage(`
//                 You are a helpful and precise assistant for answering questions.
//                 If you don't know the answer, say you don't know. 
//                 If the question requires up-to-date information, use the "searchInternet" tool to get the latest information from the internet and then answer based on the search results.
//             `),
//             ...(messages.map(msg => {
//                 if (msg.role == "user") {
//                     return new HumanMessage(msg.content)
//                 } else if (msg.role == "ai") {
//                     return new AIMessage(msg.content)
//                 }
//             })) ]
//     });

//     return response.messages[ response.messages.length - 1 ].text;

// }

// export async function generateChatTitle(message) {

//     const response = await mistralModel.invoke([
//         new SystemMessage(`
//             You are a helpful assistant that generates concise and descriptive titles for chat conversations.
            
//             User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.    
//         `),
//         new HumanMessage(`
//             Generate a title for a chat conversation based on the following first message:
//             "${message}"
//             `)
//     ])

//     return response.text;

// }







import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import {
  HumanMessage,
  SystemMessage,
  AIMessage,
  tool,
  createAgent,
} from "langchain";
import * as z from "zod";
import { searchInternet } from "./internet.service.js";

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
  model: "mistral-medium-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const searchInternetTool = tool(searchInternet, {
  name: "searchInternet",
  description:
    "Search the internet for latest and real-time information.",
  schema: z.object({
    query: z.string(),
  }),
});

const agent = createAgent({
  model: mistralModel,
  tools: [searchInternetTool],
});

const latestKeywords = [
  "today",
  "latest",
  "news",
  "current",
  "weather",
  "price",
  "live",
  "score",
  "ipl",
  "2026",
  "2027",
];

export async function generateResponse(messages) {
  const lastMessage = messages[messages.length - 1]?.content || "";

  const formattedMessages = messages.map((msg) =>
    msg.role === "user"
      ? new HumanMessage(msg.content)
      : new AIMessage(msg.content)
  );

  const shouldSearch = latestKeywords.some((word) =>
    lastMessage.toLowerCase().includes(word)
  );

  console.time("AI Response");

  let response;

  if (shouldSearch) {
    console.log("🌍 Using Tavily Search");

    response = await agent.invoke({
      messages: [
        new SystemMessage(`
You are a helpful AI assistant.

Use the searchInternet tool ONLY when the user asks for:
- latest news
- current events
- live scores
- weather
- prices
- real-time information

Otherwise answer normally.
        `),
        ...formattedMessages,
      ],
    });

    console.timeEnd("AI Response");

    return response.messages.at(-1).text;
  }

  console.log("⚡ Using Gemini Direct");

  response = await geminiModel.invoke([
    new SystemMessage(
      "You are a helpful AI assistant. Answer clearly and accurately."
    ),
    ...formattedMessages,
  ]);

  console.timeEnd("AI Response");

  return response.text;
}

export async function generateChatTitle(message) {
  const response = await geminiModel.invoke([
    new SystemMessage(`
Generate a short chat title.

Rules:
- 2-4 words
- No quotes
- No punctuation
- Keep it concise.
    `),
    new HumanMessage(message),
  ]);

  return response.text.trim();
}