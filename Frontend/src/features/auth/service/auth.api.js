// import axios from 'axios'

// const api = axios.create({
//     baseURL: "http://localhost:3000",
//     withCredentials: true,
// })

// // // ✅ Interceptor: har request ke saath token bhejega
// // api.interceptors.request.use(config => {
// //   const token = localStorage.getItem("token")
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`
// //   }
// //   return config
// // })


// export async function register({ email, username, password }) {
//     const response = await api.post("/api/auth/register",{email, username, password})
//     return response.data

// }

// export async function login ({ email, password }) {
//     const response = await api.post ("/api/auth/login",{ email, password}) 
//     //localStorage.setItem("token", response.data.token)
//     return response.data
    
// }

// // export async function getMe(){
// //     const response = await api.get("/api/auth/get-me")
// //     return response.data
// // }

// export async function getMe(){
//     try {

//         const response = await api.get("/api/auth/get-me")

//         return response.data

//     } catch (err) {

//         if (err.response?.status === 401) {
//             return null
//         }

//         throw err
//     }
// }


// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

// export async function register(data) {
//   const res = await api.post("/api/auth/register", data);
//   return res.data;
// }

// export async function login(data) {
//   const res = await api.post("/api/auth/login", data);
//   return res.data;
// }

// export async function getMe() {

//   try {

//     const res = await api.get("/api/auth/get-me");

//     return res.data;

//   } catch (err) {

//     if (err.response?.status === 401) {
//       return null;
//     }

//     throw err;
//   }
// }



import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

export async function register({ email, username, password }) {
    const response = await api.post("/api/auth/register", { email, username, password })
    return response.data
}

export async function login({ email, password }) {
    const response = await api.post("/api/auth/login", { email, password })
    return response.data
}

export async function getMe() {
    const response = await api.get("/api/auth/get-me")
    return response.data
}