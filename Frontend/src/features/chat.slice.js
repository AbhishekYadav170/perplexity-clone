// import { createSlice } from '@reduxjs/toolkit';

// const chatSlice = createSlice({
//     name: 'chat',
//     initialState: {
//         chats: {},
//         currentchatId: null,
//         isLoded: false,
//         error: null,
//     },
//     reducers: {
//         setChats: (state, action) => {
//             state.chats = action.payload;
//         },
//         setCurrentChatId: (state, action) => {
//             state.currentchatId = action.payload;
//         },
//         setLoading: (state, action) => {
//             state.isLodeding = action.payload;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//         }

//     }
// })

// export const { setChats, setCurrentChatId, setLoading, setError} = chatSlice.actions;
// export default chatSlice.reducer;
// // chats = [
// //     {
// //         role: 'user',
// //         content: "What is docker?"
// //     },
// //     {
// //         role: "ai",
// //         content: "Docker is a platform that allows developers to automate the deployment of applications inside lightweight, portable containers. It provides an efficient way to package and distribute software, ensuring consistency across different environments.  "
// //     }
// // ]





import { createSlice } from '@reduxjs/toolkit';


const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chats: {},
        currentChatId: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        createNewChat: (state, action) => {
            const { chatId, title } = action.payload
            state.chats[ chatId ] = {
                id: chatId,
                title,
                messages: [],
                lastUpdated: new Date().toISOString(),
            }
        },
        // addNewMessage: (state, action) => {
        //     const { chatId, content, role } = action.payload
        //     state.chats[ chatId ].messages.push({ content, role })
        // },
        addNewMessage: (state, action) => {
              const { id, chatId, content, role } = action.payload;

              state.chats[chatId].messages.push({
                    id,
                    content,
                    role,
                });
        },
        addMessages: (state, action) => {
            const { chatId, messages } = action.payload
            state.chats[ chatId ].messages.push(...messages)
        },
        setChats: (state, action) => {
            state.chats = action.payload
        },
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { setChats, setCurrentChatId, setLoading, setError, createNewChat, addNewMessage, addMessages } = chatSlice.actions
export default chatSlice.reducer
