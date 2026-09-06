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







// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai";
// import {
//   HumanMessage,
//   SystemMessage,
//   AIMessage,
//   tool,
//   createAgent,
// } from "langchain";
// import * as z from "zod";
// import { searchInternet } from "./internet.service.js";

// const geminiModel = new ChatGoogleGenerativeAI({
//   model: "gemini-2.5-flash",
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const mistralModel = new ChatMistralAI({
//   model: "mistral-medium-latest",
//   apiKey: process.env.MISTRAL_API_KEY,
// });

// const searchInternetTool = tool(searchInternet, {
//   name: "searchInternet",
//   description:
//     "Search the internet for latest and real-time information.",
//   schema: z.object({
//     query: z.string(),
//   }),
// });

// const agent = createAgent({
//   model: mistralModel,
//   tools: [searchInternetTool],
// });

// const latestKeywords = [
//   "today",
//   "latest",
//   "news",
//   "current",
//   "weather",
//   "price",
//   "live",
//   "score",
//   "ipl",
//   "2026",
//   "2027",
// ];

// export async function generateResponse(messages) {
//   const lastMessage = messages[messages.length - 1]?.content || "";

//   const formattedMessages = messages.map((msg) =>
//     msg.role === "user"
//       ? new HumanMessage(msg.content)
//       : new AIMessage(msg.content)
//   );

//   const shouldSearch = latestKeywords.some((word) =>
//     lastMessage.toLowerCase().includes(word)
//   );

//   console.time("AI Response");

//   let response;

//   if (shouldSearch) {
//     console.log("🌍 Using Tavily Search");

//     response = await agent.invoke({
//       messages: [
//         new SystemMessage(`
// You are a helpful AI assistant.

// Use the searchInternet tool ONLY when the user asks for:
// - latest news
// - current events
// - live scores
// - weather
// - prices
// - real-time information

// Otherwise answer normally.
//         `),
//         ...formattedMessages,
//       ],
//     });

//     console.timeEnd("AI Response");

//     return response.messages.at(-1).text;
//   }

//   console.log("⚡ Using Gemini Direct");

//   response = await geminiModel.invoke([
//     new SystemMessage(
//       "You are a helpful AI assistant. Answer clearly and accurately."
//     ),
//     ...formattedMessages,
//   ]);

//   console.timeEnd("AI Response");

//   return response.text;
// }

// export async function generateChatTitle(message) {
//   const response = await geminiModel.invoke([
//     new SystemMessage(`
// Generate a short chat title.

// Rules:
// - 2-4 words
// - No quotes
// - No punctuation
// - Keep it concise.
//     `),
//     new HumanMessage(message),
//   ]);

//   return response.text.trim();
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
//     model: geminiModel,
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
//             }))
//         ]
//     });

//      console.dir(response, { depth: null });
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



// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai";
// import {
//     HumanMessage,
//     SystemMessage,
//     AIMessage,
//     tool,
//     createAgent
// } from "langchain";
// import * as z from "zod";
// import { searchInternet } from "./internet.service.js";


// // ===============================
// // GEMINI MODEL
// // ===============================

// const geminiModel = new ChatGoogleGenerativeAI({
//     model: "gemini-flash-latest",
//     apiKey: process.env.GEMINI_API_KEY
// });


// // ===============================
// // MISTRAL MODEL
// // ===============================

// const mistralModel = new ChatMistralAI({
//     model: "mistral-medium-latest",
//     apiKey: process.env.MISTRAL_API_KEY
// });


// // ===============================
// // INTERNET SEARCH TOOL
// // ===============================

// const searchInternetTool = tool(
//     searchInternet,
//     {
//         name: "searchInternet",
//         description:
//             "Use this tool to get the latest information from the internet.",
//         schema: z.object({
//             query: z
//                 .string()
//                 .describe("The search query to look up on the internet.")
//         })
//     }
// );


// // ===============================
// // AI AGENT
// // ===============================

// // Gemini ki jagah abhi Mistral use kar rahe hain
// // because Gemini free-tier quota exceed ho gaya hai.

// const agent = createAgent({
//     model: mistralModel,
//     tools: [searchInternetTool]
// });


// // ===============================
// // GENERATE RESPONSE
// // ===============================

// export async function generateResponse(messages) {

//     console.log(messages);

//     const response = await agent.invoke({
//         messages: [
//             new SystemMessage(`
//                 You are a helpful and precise assistant for answering questions.

//                 If you don't know the answer, say you don't know.

//                 If the question requires up-to-date information,
//                 use the "searchInternet" tool to get the latest information
//                 from the internet and then answer based on the search results.

//                 Always provide the answer based on the available information.
//             `),

//             ...messages
//                 .map(msg => {

//                     if (msg.role === "user") {
//                         return new HumanMessage(msg.content);
//                     }

//                     if (msg.role === "ai") {
//                         return new AIMessage(msg.content);
//                     }

//                     return null;
//                 })
//                 .filter(Boolean)
//         ]
//     });

//     console.dir(response, { depth: null });

//     return response.messages[
//         response.messages.length - 1
//     ].text;
// }


// // ===============================
// // GENERATE CHAT TITLE
// // ===============================

// export async function generateChatTitle(message) {

//     const response = await mistralModel.invoke([
//         new SystemMessage(`
//             You are a helpful assistant that generates concise and descriptive
//             titles for chat conversations.

//             User will provide you with the first message of a chat conversation,
//             and you will generate a title that captures the essence of the
//             conversation in 2-4 words.

//             The title should be clear, relevant, and engaging, giving users
//             a quick understanding of the chat's topic.
//         `),

//         new HumanMessage(`
//             Generate a title for a chat conversation based on the following
//             first message:

//             "${message}"
//         `)
//     ]);

//     return response.text;
// }



// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { ChatMistralAI } from "@langchain/mistralai";
// import {
//     HumanMessage,
//     SystemMessage,
//     AIMessage,
//     tool,
//     createAgent
// } from "langchain";
// import * as z from "zod";
// import { searchInternet } from "./internet.service.js";


// // ===============================
// // GEMINI MODEL
// // ===============================

// const geminiModel = new ChatGoogleGenerativeAI({
//     model: "gemini-2.5-flash",
//     apiKey: process.env.GEMINI_API_KEY
// });


// // ===============================
// // MISTRAL MODEL
// // ===============================

// const mistralModel = new ChatMistralAI({
//     model: "mistral-small-2603",
//     apiKey: process.env.MISTRAL_API_KEY
// });


// // ===============================
// // INTERNET SEARCH TOOL
// // ===============================

// const searchInternetTool = tool(
//     searchInternet,
//     {
//         name: "searchInternet",

//         description: `
//             Search the internet for information.

//             Use this tool whenever the user asks about:
//             - today's news
//             - current news
//             - latest news
//             - recent news
//             - breaking news
//             - current prices
//             - historical news
//             - news from a specific month
//             - news from a specific year
//             - news from a specific date
//             - something that happened weeks or months ago
//         `,

//         schema: z.object({
//             query: z.string().describe(
//                 "Search query containing the topic, location and requested time period."
//             )
//         })
//     }
// );


// // ===============================
// // GEMINI AI AGENT
// // ===============================

// const agent = createAgent({
//     model: geminiModel,
//     tools: [searchInternetTool]
// });


// // ===============================
// // GENERATE RESPONSE
// // ===============================

// export async function generateResponse(messages) {

//     console.log(messages);

//     try {

//         const response = await agent.invoke({

//             messages: [

//                 new SystemMessage(`
//                     You are a helpful, precise and reliable AI assistant.

//                     You have access to an internet search tool called
//                     "searchInternet".

//                     ================================
//                     CURRENT INFORMATION
//                     ================================

//                     If the user asks for:

//                     - today
//                     - today's news
//                     - current
//                     - current news
//                     - latest
//                     - latest news
//                     - recent
//                     - breaking news
//                     - now
//                     - current price
//                     - today's price

//                     ALWAYS use the searchInternet tool.

//                     Search for the latest available information.

//                     Prefer information published today or within the
//                     most recent available period.

//                     Do NOT present old information as current information.

//                     ================================
//                     HISTORICAL INFORMATION
//                     ================================

//                     If the user asks for:

//                     - yesterday
//                     - last week
//                     - last month
//                     - 2 months ago
//                     - 3 months ago
//                     - a specific month
//                     - a specific year
//                     - a specific date
//                     - July 2026
//                     - August 2026
//                     - news from 2025
//                     - news from a previous period

//                     ALWAYS use the searchInternet tool.

//                     Search specifically for the requested time period.

//                     Do NOT replace historical information with today's news.

//                     ================================
//                     DATE ACCURACY
//                     ================================

//                     Pay close attention to dates in search results.

//                     If the user asks for today's news:

//                     - Prefer today's results.
//                     - Do not use weeks-old articles as today's news.

//                     If the user asks for historical news:

//                     - Prefer results from the requested period.
//                     - Do not replace historical information with current news.

//                     Never invent dates, facts, numbers or events.

//                     ================================
//                     SEARCH QUERY
//                     ================================

//                     Include the user's topic, location and requested
//                     time period in the search query.

//                     Example:

//                     User:
//                     today news in Nepal

//                     Search:
//                     latest news in Nepal today

//                     User:
//                     Nepal news 2 months ago

//                     Search:
//                     Nepal news 2 months ago

//                     User:
//                     Nepal news in July 2026

//                     Search:
//                     Nepal news July 2026

//                     ================================
//                     ANSWER
//                     ================================

//                     Answer using the information returned by the
//                     searchInternet tool.

//                     Clearly summarize the important information.

//                     Mention the source and date when useful.

//                     If reliable information for the requested period
//                     is not available, say so clearly.

//                     Do not invent information.
//                 `),

//                 ...messages
//                     .map(msg => {

//                         if (msg.role === "user") {
//                             return new HumanMessage(msg.content);
//                         }

//                         if (msg.role === "ai") {
//                             return new AIMessage(msg.content);
//                         }

//                         return null;

//                     })
//                     .filter(Boolean)
//             ]
//         });

//         console.dir(response, { depth: null });

//         return response.messages[
//             response.messages.length - 1
//         ].text;

//     } catch (error) {

//         console.error("Gemini Agent Error:", error);

//         // ===============================
//         // MISTRAL FALLBACK
//         // ===============================

//         console.log("Trying Mistral fallback...");

//         try {

//             const fallbackResponse = await mistralModel.invoke([
//                 new SystemMessage(`
//                     You are a helpful AI assistant.

//                     Answer the user's question clearly and accurately.

//                     If the question requires current or historical
//                     information, use the information available in
//                     the conversation.
//                 `),

//                 ...messages
//                     .map(msg => {

//                         if (msg.role === "user") {
//                             return new HumanMessage(msg.content);
//                         }

//                         if (msg.role === "ai") {
//                             return new AIMessage(msg.content);
//                         }

//                         return null;

//                     })
//                     .filter(Boolean)
//             ]);

//             return fallbackResponse.text;

//         } catch (fallbackError) {

//             console.error(
//                 "Mistral Fallback Error:",
//                 fallbackError
//             );

//             throw new Error(
//                 "Unable to generate AI response."
//             );
//         }
//     }
// }


// // ===============================
// // GENERATE CHAT TITLE
// // ===============================

// export async function generateChatTitle(message) {

//     const response = await mistralModel.invoke([

//         new SystemMessage(`
//             You are a helpful assistant that generates concise and
//             descriptive titles for chat conversations.

//             Generate a title of 2-4 words.

//             The title should be:
//             - clear
//             - relevant
//             - concise
//             - descriptive
//         `),

//         new HumanMessage(`
//             Generate a title for a chat conversation based on the
//             following first message:

//             "${message}"
//         `)
//     ]);

//     return response.text;
// }



import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";

import {
    HumanMessage,
    SystemMessage,
    AIMessage,
    tool,
    createAgent
} from "langchain";

import * as z from "zod";
import { searchInternet } from "./internet.service.js";


// =====================================================
// GEMINI MODEL
// PRIMARY MODEL
// =====================================================

const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
});


// =====================================================
// MISTRAL MODEL
// FALLBACK MODEL
// =====================================================

const mistralModel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY,
});


// =====================================================
// INTERNET SEARCH TOOL
// =====================================================

const searchInternetTool = tool(
    searchInternet,
    {
        name: "searchInternet",

        description: `
            Search the internet for information.

            Use this tool whenever the user asks about:

            - today's news
            - current news
            - latest news
            - recent news
            - breaking news
            - current prices
            - current information
            - historical news
            - news from a specific month
            - news from a specific year
            - news from a specific date
            - something that happened weeks or months ago
            - something that happened in the past
        `,

        schema: z.object({
            query: z.string().describe(
                "Search query containing the topic, location and requested time period."
            )
        })
    }
);


// =====================================================
// GEMINI AI AGENT
// =====================================================

const agent = createAgent({
    model: geminiModel,
    tools: [searchInternetTool],
});


// =====================================================
// FORMAT DATABASE MESSAGES
// =====================================================

function formatMessages(messages) {

    return messages
        .map((msg) => {

            if (msg.role === "user") {
                return new HumanMessage(msg.content);
            }

            if (msg.role === "ai") {
                return new AIMessage(msg.content);
            }

            return null;

        })
        .filter(Boolean);
}


// =====================================================
// SYSTEM PROMPT
// =====================================================

const systemPrompt = `
You are a helpful, precise and reliable AI assistant.

You can answer general questions and use the internet search
tool when current or historical information is required.

================================================
CURRENT INFORMATION
================================================

If the user asks for:

- today
- today's news
- current
- current news
- latest
- latest news
- recent
- breaking news
- now
- current price
- today's price

ALWAYS use the searchInternet tool.

Search for the latest available information.

Prefer recent and reliable information.

Do NOT present old information as current information.

================================================
HISTORICAL INFORMATION
================================================

If the user asks for:

- yesterday
- last week
- last month
- 2 months ago
- 3 months ago
- a specific month
- a specific year
- a specific date
- news from a previous period

ALWAYS use the searchInternet tool.

Search specifically for the requested time period.

Do NOT replace historical information with today's information.

================================================
DATE ACCURACY
================================================

Pay close attention to dates.

Never invent:

- dates
- facts
- numbers
- events
- sources

If reliable information is unavailable, clearly say so.

================================================
GENERAL QUESTIONS
================================================

For normal questions that do not require current information,
answer directly using your knowledge.

Keep answers clear and useful.

================================================
SEARCH
================================================

When using searchInternet:

- include the user's topic
- include location if relevant
- include requested date/time period
- use the search results to construct the answer

Do not claim that you searched if you did not search.

================================================
ANSWER STYLE
================================================

Answer naturally and clearly.

Use markdown when useful.

For technical questions, explain with examples when appropriate.
`;


// =====================================================
// GENERATE RESPONSE
// =====================================================

export async function generateResponse(messages) {

    console.log("=================================");
    console.log("AI REQUEST STARTED");
    console.log("=================================");

    console.log("Messages:", messages);

    const formattedMessages = formatMessages(messages);


    // =================================================
    // 1. GEMINI PRIMARY
    // =================================================

    try {

        console.log("Trying Gemini...");

        const response = await agent.invoke({

            messages: [
                new SystemMessage(systemPrompt),

                ...formattedMessages
            ]

        });


        const responseMessages = response?.messages || [];

        const lastMessage =
            responseMessages[responseMessages.length - 1];


        if (!lastMessage) {
            throw new Error("Gemini returned an empty response.");
        }


        const text = lastMessage.text;


        if (!text || !text.trim()) {
            throw new Error("Gemini returned empty text.");
        }


        console.log("Gemini response received successfully.");

        console.log("=================================");
        console.log("AI REQUEST COMPLETED");
        console.log("=================================");


        return text.trim();

    } catch (geminiError) {

        console.error("=================================");
        console.error("GEMINI ERROR");
        console.error("=================================");

        console.error(geminiError);


        // =================================================
        // 2. MISTRAL FALLBACK
        // =================================================

        console.log("Trying Mistral fallback...");


        try {

            const fallbackResponse =
                await mistralModel.invoke([

                    new SystemMessage(`
                        You are a helpful, precise and reliable AI assistant.

                        Answer the user's question clearly and accurately.

                        If the user asks about current or historical
                        information, explain that your answer should
                        only use information available in the conversation
                        unless reliable information is provided.

                        Never invent facts, dates, numbers or events.

                        Use markdown when useful.
                    `),

                    ...formattedMessages

                ]);


            const text = fallbackResponse?.text;


            if (!text || !text.trim()) {
                throw new Error(
                    "Mistral returned an empty response."
                );
            }


            console.log(
                "Mistral fallback response received successfully."
            );


            console.log("=================================");
            console.log("MISTRAL FALLBACK COMPLETED");
            console.log("=================================");


            return text.trim();

        } catch (mistralError) {

            console.error("=================================");
            console.error("MISTRAL FALLBACK ERROR");
            console.error("=================================");

            console.error(mistralError);


            // =================================================
            // BOTH MODELS FAILED
            // =================================================

            const geminiStatus =
                geminiError?.status ||
                geminiError?.response?.status;

            const mistralStatus =
                mistralError?.status ||
                mistralError?.response?.status;


            if (
                geminiStatus === 429 ||
                mistralStatus === 429
            ) {

                throw new Error(
                    "AI rate limit reached. Please try again in a moment."
                );

            }


            throw new Error(
                "Unable to generate AI response. Please try again."
            );
        }
    }
}


// =====================================================
// GENERATE CHAT TITLE
// =====================================================

export async function generateChatTitle(message) {

    console.log("Generating chat title...");


    // =================================================
    // GEMINI TITLE
    // =================================================

    try {

        const response =
            await geminiModel.invoke([

                new SystemMessage(`
                    You generate concise and descriptive titles
                    for chat conversations.

                    Generate a title of only 2-4 words.

                    The title must be:

                    - clear
                    - relevant
                    - concise
                    - descriptive

                    Return ONLY the title.

                    Do not use quotation marks.
                    Do not add explanations.
                `),

                new HumanMessage(`
                    Generate a title for this chat:

                    "${message}"
                `)

            ]);


        const title = response?.text?.trim();


        if (!title) {
            throw new Error(
                "Gemini generated an empty title."
            );
        }


        console.log("Gemini chat title:", title);


        return title;


    } catch (geminiTitleError) {

        console.error(
            "Gemini title generation failed:",
            geminiTitleError
        );


        // =================================================
        // MISTRAL TITLE FALLBACK
        // =================================================

        try {

            console.log(
                "Trying Mistral for chat title..."
            );


            const response =
                await mistralModel.invoke([

                    new SystemMessage(`
                        Generate a concise title for a chat.

                        Generate only 2-4 words.

                        Return ONLY the title.

                        No explanation.
                        No quotation marks.
                    `),

                    new HumanMessage(`
                        Generate a title for this chat:

                        "${message}"
                    `)

                ]);


            const title = response?.text?.trim();


            if (!title) {
                throw new Error(
                    "Mistral generated an empty title."
                );
            }


            console.log(
                "Mistral chat title:",
                title
            );


            return title;


        } catch (mistralTitleError) {

            console.error(
                "Mistral title generation failed:",
                mistralTitleError
            );


            // =================================================
            // FINAL SAFE TITLE
            // =================================================

            return "New Chat";
        }
    }
}
