// import { response } from "express";
// import { generateResponse, generateChatTitle } from "../services/ai.service.js";
// import ChatModel from "../models/chat.model.js";
// import messageModel from "../models/message.model.js";

// export async function sendMessage(req, res) {

//     const { message, chat: chatId } = req.body;
   
//     //const result = await generateResponse(message);
    
//     let title = null, chat = null;

//     if (!chatId) {
//       title = await generateChatTitle(message);
    
//       chat = await ChatModel.create({
//          user: req.user.id,
//          title
//       })

//     }

//     const userMessage = await messageModel.create({
//         chat: chatId || chat._id,
//         content: message,
//         role: "user"
//     })

//     const messages = await messageModel.find({ chat: chatId})

//     const result = await generateResponse(message);

//     const aiMessage = await messageModel.create({
//         chat: chatId || chat._id,
//         content: result,
//         role: "ai"
//     })

//      //console.log(messages)

//      res.status(201).json({
//         title,
//         chat,
//         aiMessage
//      })
   
// }


// import { response } from "express";
// import { generateResponse, generateChatTitle } from "../services/ai.service.js";
// import ChatModel from "../models/chat.model.js";
// import messageModel from "../models/message.model.js";

// export async function sendMessage(req, res) {

//     const { message, chat: chatId } = req.body;
   
//     let title = null, chat = null;

//     // ✅ New chat create
//     if (!chatId) {
//         title = await generateChatTitle(message);
    
//         chat = await ChatModel.create({
//             user: req.user.id,
//             title
//         });
//     }

//     // ✅ current chat id fix
//     const currentChatId = chatId || chat._id;

//     // ✅ user message save
//     await messageModel.create({
//         chat: currentChatId,
//         content: message,
//         role: "user"
//     });

//     // ✅ FULL history lao (IMPORTANT)
//     const messages = await messageModel
//         .find({ chat: currentChatId })
//         .sort({ createdAt: 1 });

//     // ✅ format banao
//     const formattedMessages = messages.map(msg => ({
//         role: msg.role,
//         content: msg.content
//     }));

//     // ✅ AI ko FULL history bhejo (MAIN FIX)
//     const result = await generateResponse(formattedMessages);

//     // ✅ AI message save
//     const aiMessage = await messageModel.create({
//         chat: currentChatId,
//         content: result,
//         role: "ai"
//     });

//     res.status(201).json({
//         title,
//         chat,
//         aiMessage
//     });
// }




// import { generateResponse, generateChatTitle } from "../services/ai.service.js";
// import ChatModel from "../models/chat.model.js";
// import messageModel from "../models/message.model.js";

// export async function sendMessage(req, res) {
//     try {
//         const { message,  chatId } = req.body;

//         let chat = null;
//         let title = null;

//         // ✅ New chat
//         if (!chatId) {
//             title = await generateChatTitle(message);

//             chat = await ChatModel.create({
//                 user: req.user.id,
//                 title
//             });
//         }

//         const currentChatId = chatId || chat._id;

//         // ✅ Save user message
//         await messageModel.create({
//             chat: currentChatId,
//             content: message,
//             role: "user"
//         });

//         // ✅ Get full history
//         const messages = await messageModel
//             .find({ chat: currentChatId })
//             .sort({ createdAt: 1 });

//         // ✅ Add system instruction (VERY IMPORTANT)
//         const formattedMessages = [
//             {
//                 role: "system",
//                 content: "You are a helpful assistant. Always use previous messages to answer. If user asks about first message, answer correctly."
//             },
//             ...messages.map(msg => ({
//                 role: msg.role,
//                 content: msg.content
//             }))
//         ];

//         // ✅ AI response
//         const result = await generateResponse(formattedMessages);

//         // ✅ Save AI message
//         const aiMessage = await messageModel.create({
//             chat: currentChatId,
//             content: result.messages,
//             role: "assistant",
//             metadata: result
//         });

//         // ✅ Response
//         res.status(201).json({
//             chatId: currentChatId, 
//             title,
//             chat,
//             aiMessage: {
//                  content: result.message,
//                  role: "assistant"
//     }
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// }

// export async function getChats(req, res) {
//     const user = req.user

//     const chats = await ChatModel.find({ user: user.id })

//     res.status(200).json({
//         message: "chats retrieved successfully",
//         chats
//     })
    
// }

// export async function getMessage (req, res) {
//     const { chatId } = req.params;

//     const chat = await ChatModel.findOne({

//         _id: chatId,
//         user: req.user.id
//     })

//     if(!chat) {
//         return res.status(404).json({
//             message: "chat not found"
//         })
//     }

//     const messages = await messageModel.find({
//         chat: chatId
//     })

//     res.status(200).json({
//         message: "Messages riterived successfully",
//         messages
//     })
// }

// export async function deleteChat(req, res) {
//     const { chatId} = req.params;

//     const chat = await ChatModel.findOneAndDelete({
//         _id: chatId,
//         user: req.user.id
//     })

//     await messageModel.deleteMany({
//         chat: chatId
//     })

//     if(!chat) {
//         return res.status(404).json({
//             message: "chat not found"
//         })
//     }

//     res.status(200).json({
//         message: "Chat deleted successfully"
//     })
// }




import { generateResponse, generateChatTitle } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js"
import messageModel from "../models/message.model.js";

export async function sendMessage(req, res) {

    const { message, chat: chatId } = req.body;


    let title = null, chat = null;

    if (!chatId) {
        title = await generateChatTitle(message);
        chat = await chatModel.create({
            user: req.user.id,
            title
        })
    }

    const userMessage = await messageModel.create({
        chat: chatId || chat._id,
        content: message,
        role: "user"
    })

    const messages = await messageModel.find({ chat: chatId || chat._id })

    const result = await generateResponse(messages);

    const aiMessage = await messageModel.create({
        chat: chatId || chat._id,
        content: result,
        role: "ai"
    })


    res.status(201).json({
        title,
        chat,
        aiMessage
    })

}

export async function getChats(req, res) {
    const user = req.user

    const chats = await chatModel.find({ user: user.id })

    res.status(200).json({
        message: "Chats retrieved successfully",
        chats
    })
}

export async function getMessages(req, res) {
    const { chatId } = req.params;

    const chat = await chatModel.findOne({
        _id: chatId,
        user: req.user.id
    })

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        })
    }

    const messages = await messageModel.find({
        chat: chatId
    })

    res.status(200).json({
        message: "Messages retrieved successfully",
        messages
    })
}

export async function deleteChat(req, res) {

    const { chatId } = req.params;

    const chat = await chatModel.findOneAndDelete({
        _id: chatId,
        user: req.user.id
    })

    await messageModel.deleteMany({
        chat: chatId
    })

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        })
    }

    res.status(200).json({
        message: "Chat deleted successfully"
    })
}


export async function renameChat(req, res) {

    const { chatId } = req.params;
    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const chat = await chatModel.findOneAndUpdate(
        {
            _id: chatId,
            user: req.user.id
        },
        {
            title: title.trim()
        },
        {
            new: true
        }
    );

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        });
    }

    res.status(200).json({
        message: "Chat renamed successfully",
        chat
    });
}