// import { initializeSocketConnection } from "../service/chat.socket";
// import { sendMessage, getChats, getMessages, deleteChat } from "../service/chat.api.js";
// import { setChats, setCurrentChatId, setError, setLoading} from "../../chat.slice.js";
// import { useDispatch } from "react-redux";


// export const useChat = () => {

//     const dispatch = useDispatch();

//     async function handleSendMessage({ message, chatId }) {
//         dispatch(setLoading(true));
//         const data = await sendMessage({ message, chatId})
//         const { chat, aiMessage } = data;
//         dispatch(setChats((prev) => {
//             return {
//                 ...prev,
//                 [ chat._id ]: {
//                     ...chat,
//                     message: [
//                         { content: message, role: "user"}, aiMessage]
//                 }
//             }

//         }))

//         dispatch(setCurrentChatId(chatId._id))
//     }

//     async function handleGetChats() {
//         dispatch(setLoading(true));
//         try {
//             const data = await getChats();
//             dispatch(setChats(data));
//         } catch (error) {
//             dispatch(setError(error.message));
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }
//     return { 
//         initializeSocketConnection,
//         handleSendMessage,
//         handleGetChats
//     }
// }







// import { initializeSocketConnection } from "../service/chat.socket.js";
// import { sendMessage, getChats, getMessages, deleteChat , renameChat, clearAllChats  } from "../service/chat.api.js";
// import { setChats, setCurrentChatId, setError, setLoading, createNewChat, addNewMessage, addMessages,   deleteChat as deleteChatAction,  renameChat as renameChatAction , clearChats, } from "../../chat.slice.js";
// import { useDispatch } from "react-redux";


// export const useChat = () => {

//     const dispatch = useDispatch()


//     async function handleSendMessage({ message, chatId }) {
//         dispatch(setLoading(true))
//         const data = await sendMessage({ message, chatId })

//         //console.log("API Response:", data);
//         const { chat, aiMessage } = data
//         if (!chatId)
//             dispatch(createNewChat({
//                 chatId: chat._id,
//                 title: chat.title,
//             }))
//         // dispatch(addNewMessage({
//         //     chatId: chatId || chat._id,
//         //     content: message,
//         //     role: "user",
//         // }))
//         dispatch(addNewMessage({
//               id: crypto.randomUUID(),
//               chatId: chatId || chat._id,
//               content: message,
//               role: "user",
//         }))

//         // dispatch(addNewMessage({
//         //     chatId: chatId || chat._id,
//         //     content: aiMessage.content,
//         //     role: aiMessage.role,
//         // }))
//         dispatch(addNewMessage({
//              id: aiMessage._id,
//              chatId: chatId || chat._id,
//              content: aiMessage.content,
//              role: aiMessage.role,
//         }))
//         //dispatch(setCurrentChatId(chat._id))
//         dispatch(setCurrentChatId(chatId || chat._id))
//         dispatch(setLoading(false));
//     }

//     async function handleGetChats() {
//         dispatch(setLoading(true))
//         const data = await getChats()
//         const { chats } = data
//         dispatch(setChats(chats.reduce((acc, chat) => {
//             acc[ chat._id ] = {
//                 id: chat._id,
//                 title: chat.title,
//                 messages: [],
//                 lastUpdated: chat.updatedAt,
//             }
//             return acc
//         }, {})))
//         dispatch(setLoading(false))
//     }

//     async function handleOpenChat(chatId, chats) {
//         //console.log(chats[ chatId ]?.messages.length)

//         if (chats[ chatId ]?.messages.length === 0) {
//             const data = await getMessages(chatId)
//             const { messages } = data

//             // const formattedMessages = messages.map(msg => ({
//             //     content: msg.content,
//             //     role: msg.role,
//             // }))
//             const formattedMessages = messages.map(msg => ({
//                     id: msg._id,
//                     content: msg.content,
//                     role: msg.role,
//             }))

//             dispatch(addMessages({
//                 chatId,
//                 messages: formattedMessages,
//             }))
//         }
//         dispatch(setCurrentChatId(chatId))
//     }

//     function handleNewChat() {
//             dispatch(setCurrentChatId(null));
//     }

//     async function handleDeleteChat(chatId) {
//         try {
//              dispatch(setLoading(true));

//              await deleteChat(chatId);

//              dispatch(deleteChatAction(chatId));

//         } catch (err) {
//                dispatch(setError(err.message));
//         } finally {
//              dispatch(setLoading(false));
//         }
//     }

//     async function handleRenameChat(chatId, title) {
//        try {
//           dispatch(setLoading(true));

//           await renameChat(chatId, title);

//           dispatch(
//               renameChatAction({
//                   chatId,
//                   title,
//                })
//            );

//         } catch (err) {
//             dispatch(setError(err.message));
//         } finally {
//              dispatch(setLoading(false));
//         }
//     }

//     async function handleClearChats() {
//         try {
//             dispatch(setLoading(true));

//             await clearAllChats();

//            dispatch(clearChats());

//         } catch (err) {
//               dispatch(setError(err.message));
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }


//     return {
//         initializeSocketConnection,
//         handleSendMessage,
//         handleGetChats,
//         handleOpenChat,
//         handleDeleteChat,
//         handleRenameChat,
//         handleClearChats,
//         handleNewChat,
//     }

// }





import { initializeSocketConnection } from "../service/chat.socket.js";
import {
    sendMessage,
    getChats,
    getMessages,
    deleteChat,
    renameChat
} from "../service/chat.api.js";

import {
    setChats,
    setCurrentChatId,
    setError,
    setLoading,
    createNewChat,
    addNewMessage,
    addMessages,
    deleteChat as deleteChatAction,
    renameChat as renameChatAction,
} from "../../chat.slice.js";

import { useDispatch } from "react-redux";


export const useChat = () => {

    const dispatch = useDispatch();


    // =========================================
    // SEND MESSAGE
    // =========================================

    // async function handleSendMessage({ message, chatId }) {

    //     /*
    //      * IMPORTANT:
    //      * Agar new chat hai to pehle temporary chat
    //      * frontend par create karenge.
    //      *
    //      * Isse question bhejte hi chat open ho jayega.
    //      */

    //     let activeChatId = chatId;


    //     // =========================================
    //     // NEW CHAT
    //     // =========================================

    //     if (!activeChatId) {

    //         const temporaryChatId = crypto.randomUUID();

    //         activeChatId = temporaryChatId;

    //         // Chat turant frontend par create
    //         dispatch(
    //             createNewChat({
    //                 chatId: temporaryChatId,
    //                 title: message.slice(0, 40),
    //             })
    //         );

    //         // Chat turant open
    //         dispatch(setCurrentChatId(temporaryChatId));
    //     }


    //     // =========================================
    //     // USER MESSAGE TURANT SHOW
    //     // =========================================

    //     dispatch(
    //         addNewMessage({
    //             id: crypto.randomUUID(),
    //             chatId: activeChatId,
    //             content: message,
    //             role: "user",
    //         })
    //     );


    //     // =========================================
    //     // LOADING START
    //     // =========================================

    //     dispatch(setLoading(true));


    //     try {

    //         /*
    //          * Backend ko original chatId bhejenge.
    //          *
    //          * New chat ke case mein original chatId null hoga,
    //          * taaki backend actual MongoDB chat create kare.
    //          */

    //         const data = await sendMessage({
    //             message,
    //             chatId: chatId || null,
    //         });


    //         const { chat, aiMessage } = data;


    //         // =========================================
    //         // NEW CHAT KE CASE MEIN
    //         // BACKEND KA REAL CHAT ID SET KARO
    //         // =========================================

    //         if (!chatId && chat) {

    //             const realChatId = chat._id;


    //             /*
    //              * Temporary chat ko remove karne ki zarurat
    //              * nahi padegi agar backend ka real ID same
    //              * structure mein update kar dein.
    //              *
    //              * Current slice mein direct rename/change
    //              * action nahi hai, isliye yahan temporary
    //              * chat ko real chat ke naam se create kar rahe hain.
    //              */

    //             dispatch(
    //                 createNewChat({
    //                     chatId: realChatId,
    //                     title: chat.title,
    //                 })
    //             );


    //             // User message real chat mein add
    //             dispatch(
    //                 addNewMessage({
    //                     id: crypto.randomUUID(),
    //                     chatId: realChatId,
    //                     content: message,
    //                     role: "user",
    //                 })
    //             );


    //             // Real chat open
    //             dispatch(setCurrentChatId(realChatId));


    //             // AI response
    //             if (aiMessage) {

    //                 dispatch(
    //                     addNewMessage({
    //                         id: aiMessage._id,
    //                         chatId: realChatId,
    //                         content: aiMessage.content,
    //                         role: aiMessage.role,
    //                     })
    //                 );
    //             }

    //         } else {

    //             // =========================================
    //             // EXISTING CHAT
    //             // =========================================

    //             if (aiMessage) {

    //                 dispatch(
    //                     addNewMessage({
    //                         id: aiMessage._id,
    //                         chatId: activeChatId,
    //                         content: aiMessage.content,
    //                         role: aiMessage.role,
    //                     })
    //                 );
    //             }


    //             dispatch(
    //                 setCurrentChatId(activeChatId)
    //             );
    //         }


    //     } catch (error) {

    //         console.error(
    //             "Send Message Error:",
    //             error
    //         );

    //         dispatch(
    //             setError(
    //                 error?.response?.data?.message ||
    //                 error.message ||
    //                 "Unable to send message"
    //             )
    //         );

    //     } finally {

    //         dispatch(setLoading(false));

    //     }
    // }

    async function handleSendMessage({ message, chatId }) {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
        const data = await sendMessage({ message, chatId });

        const { chat, aiMessage } = data;

        const activeChatId = chatId || chat._id;

        // New chat create hone par immediately Redux me add karo
        if (!chatId) {
            dispatch(
                createNewChat({
                    chatId: chat._id,
                    title: chat.title,
                })
            );
        }

        // User message
        dispatch(
            addNewMessage({
                id: crypto.randomUUID(),
                chatId: activeChatId,
                content: message,
                role: "user",
            })
        );

        // AI message
        dispatch(
            addNewMessage({
                id: aiMessage._id,
                chatId: activeChatId,
                content: aiMessage.content,
                role: aiMessage.role,
            })
        );

        dispatch(setCurrentChatId(activeChatId));

    } catch (error) {
        console.error("Send Message Error:", error);

        const errorMessage =
            error?.response?.data?.message ||
            error?.message ||
            "Unable to generate AI response.";

        dispatch(setError(errorMessage));

        console.error("AI Error:", errorMessage);

    } finally {
        dispatch(setLoading(false));
    }
}


    // =========================================
    // GET ALL CHATS
    // =========================================

    async function handleGetChats() {

        try {

            dispatch(setLoading(true));

            const data = await getChats();

            const { chats } = data;

            dispatch(
                setChats(
                    chats.reduce((acc, chat) => {

                        acc[chat._id] = {
                            id: chat._id,
                            title: chat.title,
                            messages: [],
                            lastUpdated: chat.updatedAt,
                        };

                        return acc;

                    }, {})
                )
            );

        } catch (error) {

            console.error(
                "Get Chats Error:",
                error
            );

            dispatch(
                setError(
                    error?.response?.data?.message ||
                    error.message
                )
            );

        } finally {

            dispatch(setLoading(false));

        }
    }


    // =========================================
    // OPEN CHAT
    // =========================================

    async function handleOpenChat(chatId, chats) {

        try {

            if (chats[chatId]?.messages.length === 0) {

                const data = await getMessages(chatId);

                const { messages } = data;

                const formattedMessages = messages.map(
                    (msg) => ({
                        id: msg._id,
                        content: msg.content,
                        role: msg.role,
                    })
                );


                dispatch(
                    addMessages({
                        chatId,
                        messages: formattedMessages,
                    })
                );
            }


            dispatch(
                setCurrentChatId(chatId)
            );

        } catch (error) {

            console.error(
                "Open Chat Error:",
                error
            );

            dispatch(
                setError(
                    error?.response?.data?.message ||
                    error.message
                )
            );
        }
    }


    // =========================================
    // NEW CHAT
    // =========================================

    function handleNewChat() {

        dispatch(
            setCurrentChatId(null)
        );
    }


    // =========================================
    // DELETE CHAT
    // =========================================

    async function handleDeleteChat(chatId) {

        try {

            dispatch(setLoading(true));

            await deleteChat(chatId);

            dispatch(
                deleteChatAction(chatId)
            );

        } catch (error) {

            console.error(
                "Delete Chat Error:",
                error
            );

            dispatch(
                setError(
                    error?.response?.data?.message ||
                    error.message
                )
            );

        } finally {

            dispatch(setLoading(false));

        }
    }


    // =========================================
    // RENAME CHAT
    // =========================================

    async function handleRenameChat(chatId, title) {

        try {

            dispatch(setLoading(true));

            await renameChat(
                chatId,
                title
            );

            dispatch(
                renameChatAction({
                    chatId,
                    title,
                })
            );

        } catch (error) {

            console.error(
                "Rename Chat Error:",
                error
            );

            dispatch(
                setError(
                    error?.response?.data?.message ||
                    error.message
                )
            );

        } finally {

            dispatch(setLoading(false));

        }
    }


    return {

        initializeSocketConnection,

        handleSendMessage,

        handleGetChats,

        handleOpenChat,

        handleDeleteChat,

        handleRenameChat,

        handleNewChat,

    };
};