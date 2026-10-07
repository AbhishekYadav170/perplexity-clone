// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://perplexity-clone-pvgw.onrender.com",
//   withCredentials: true,
// });

// export const logout = async () => {
//   const res = await api.post("/api/auth/logout");
//   return res.data;
// };

// export const getMe = async () => {
//     const res = await api.get("/api/auth/get-me");
//     return res.data;
// };




import axios from "axios";

const api = axios.create({
    baseURL: "https://perplexity-clone-pvgw.onrender.com",
    withCredentials: true,
});

export async function register({ email, username, password }) {
    const response = await api.post("/api/auth/register", {
        email,
        username,
        password,
    });

    return response.data;
}

export async function login({ email, password }) {
    const response = await api.post("/api/auth/login", {
        email,
        password,
    });

    if (response.data.token) {
        localStorage.setItem("token", response.data.token);
    }

    return response.data;
}

export async function getMe() {
    const token = localStorage.getItem("token");

    const response = await api.get("/api/auth/get-me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function logout() {
    try {
        const response = await api.post("/api/auth/logout");

        // Local token bhi remove karo
        localStorage.removeItem("token");

        return response.data;
    } catch (error) {
        // Backend logout fail ho tab bhi local token remove ho
        localStorage.removeItem("token");
        throw error;
    }
}