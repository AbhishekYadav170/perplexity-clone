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





// import { initializeSocketConnection } from "../service/chat.socket";
// import { sendMessage, getChats } from "../service/chat.api.js";
// import { setChats, setCurrentChatId, setError, setLoading } from "../../chat.slice.js";
// import { useDispatch } from "react-redux";

// export const useChat = () => {

//     const dispatch = useDispatch();

//     // ✅ SEND MESSAGE
//     async function handleSendMessage({ message, chatId }) {
//         dispatch(setLoading(true));

//         try {
//             const data = await sendMessage({ message, chatId });

//             const { chat, aiMessage } = data;

//             // 🔥 FIXED: proper structure + no function in redux
//             dispatch(setChats({
//                 [chat._id]: {
//                     ...chat,
//                     messages: [
//                         { content: message, role: "user" },
//                         { content: aiMessage.content, role: "assistant" }
//                     ]
//                 }
//             }));

//             // 🔥 FIXED: correct id
//             dispatch(setCurrentChatId(chat._id));

//         } catch (error) {
//             dispatch(setError(error.message));
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }

//     // ✅ GET ALL CHATS
//     async function handleGetChats() {
//         dispatch(setLoading(true));

//         try {
//             const data = await getChats();

//             // 🔥 assume backend returns { chats: [...] }
//             const chatsArray = data.chats;

//             // convert array → object
//             const chatsObject = {};
//             chatsArray.forEach(chat => {
//                 chatsObject[chat._id] = chat;
//             });

//             dispatch(setChats(chatsObject));

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
//     };
// };




import { initializeSocketConnection } from "../service/chat.socket.js";
import { sendMessage, getChats, getMessages, deleteChat } from "../service/chat.api.js";
import { setChats, setCurrentChatId, setError, setLoading, createNewChat, addNewMessage, addMessages } from "../../chat.slice.js";
import { useDispatch } from "react-redux";


export const useChat = () => {

    const dispatch = useDispatch()


    async function handleSendMessage({ message, chatId }) {
        dispatch(setLoading(true))
        const data = await sendMessage({ message, chatId })

        //console.log("API Response:", data);
        const { chat, aiMessage } = data
        if (!chatId)
            dispatch(createNewChat({
                chatId: chat._id,
                title: chat.title,
            }))
        dispatch(addNewMessage({
            chatId: chatId || chat._id,
            content: message,
            role: "user",
        }))
        dispatch(addNewMessage({
            chatId: chatId || chat._id,
            content: aiMessage.content,
            role: aiMessage.role,
        }))
        dispatch(setCurrentChatId(chat._id))
    }

    async function handleGetChats() {
        dispatch(setLoading(true))
        const data = await getChats()
        const { chats } = data
        dispatch(setChats(chats.reduce((acc, chat) => {
            acc[ chat._id ] = {
                id: chat._id,
                title: chat.title,
                messages: [],
                lastUpdated: chat.updatedAt,
            }
            return acc
        }, {})))
        dispatch(setLoading(false))
    }

    async function handleOpenChat(chatId, chats) {

        console.log(chats[ chatId ]?.messages.length)

        if (chats[ chatId ]?.messages.length === 0) {
            const data = await getMessages(chatId)
            const { messages } = data

            const formattedMessages = messages.map(msg => ({
                content: msg.content,
                role: msg.role,
            }))

            dispatch(addMessages({
                chatId,
                messages: formattedMessages,
            }))
        }
        dispatch(setCurrentChatId(chatId))
    }

    return {
        initializeSocketConnection,
        handleSendMessage,
        handleGetChats,
        handleOpenChat
    }

}