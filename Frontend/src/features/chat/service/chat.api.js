// import axios from 'axios';

// const api = axios.create({
//     baseURL:  "https://perplexity-clone-pvgw.onrender.com",
//     withCredentials: true,
// })

// export const sendMessage = async ({message, chatId }) => {
//     const response = await api.post("/api/chats/message", { message,chat: chatId })
//     return response.data;
// }

// export const getChats = async () => {
//     const response = await api.get("/api/chats");
//     return response.data;
// }

// export const getMessages = async (chatId) => {
//     const response = await api.get(`/api/chats/${chatId}/messages`)
//     return response.data;
// }

// export const deleteChat = async (chatId) => {
//     const response = await api.delete(`/api/chats/delete/${chatId}`)
//     return response.data;
// }

 
// export const renameChat = async (chatId, title) => {
//     const response = await api.patch(
//         `/api/chats/rename/${chatId}`,
//         { title }
//     );

//     return response.data;
// };

// export const clearAllChats = async () => {
//     const response = await api.delete("/api/chats/clear");
//     return response.data;
// };





import axios from "axios";

const api = axios.create({
    baseURL: "https://perplexity-clone-pvgw.onrender.com",
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const sendMessage = async ({ message, chatId }) => {
    const response = await api.post("/api/chats/message", {
        message,
        chat: chatId,
    });

    return response.data;
};

export const getChats = async () => {
    const response = await api.get("/api/chats");
    return response.data;
};

export const getMessages = async (chatId) => {
    const response = await api.get(`/api/chats/${chatId}/messages`);
    return response.data;
};

export const deleteChat = async (chatId) => {
    const response = await api.delete(`/api/chats/delete/${chatId}`);
    return response.data;
};

export const renameChat = async (chatId, title) => {
    const response = await api.patch(
        `/api/chats/rename/${chatId}`,
        { title }
    );

    return response.data;
};

export const clearAllChats = async () => {
    const response = await api.delete("/api/chats/clear");
    return response.data;
};