// import { useDispatch } from "react-redux";
// import { register, login, getMe } from "../service/auth.api";
// import { setLoading, setUser, setError } from "../auth.slice";

// export function useAuth() {


//     const dispatch = useDispatch()

//     // async function handleRegister({ email, username, password }) {
//     //     try{
//     //         dispatch(setLoading(true))
//     //         const data = await register ({ email, username, password})
//     //     } catch(error) {
//     //         dispatch(setError(error.response?. data?.message || "Register failed "))
//     //     } finally {
//     //         dispatch(setLoading(false))
//     //     }
//     // }

//     async function handleRegister({ email, username, password }) {
//        try {
//            dispatch(setLoading(true))

//            const data = await register({ email, username, password })

//            console.log("REGISTER RESPONSE:", data)
//            dispatch(setUser(data.user)) 

//        } catch(error) {
//            console.log("REGISTER ERROR:", error.response?.data) 
//            dispatch(setError(error.response?.data?.message || "Register failed "))
//        } finally {
//            dispatch(setLoading(false))
//        }
//     }
//     async function handleLogin({ email, password }) {
//         try{
//             dispatch(setLoading(true))
//             const data = await login ({ email,  password})

//              console.log("LOGIN RESPONSE:", data);

//           // Redux store update karo
//           //dispatch(setUser(data.user));
//           // Agar token bhi aa raha hai to:
//           // dispatch(setCredentials({ user: data.user, token: data.token }));

//           dispatch(setCredentials({
//                user: data.user,
//                token: data.token,   // agar backend token bhej raha hai
//             }));


//         } catch(error) {
//             dispatch(setError(error.response?. data?.message || "Login failed "))
//         } finally {
//             dispatch(setLoading(false))
//         }
//     }

//     async function handleGetMe() {
//         try {
//             dispatch(setLoading(true))
//             const data = await getMe()
//             dispatch(setUser(data.user))

//         }catch (err) {
//             dispatch(setError(err.response?.data?.message || "Failed to fetch user data"))
//         } finally {
//             dispatch(setLoading(false))
//         }
//     }

//     return {
//         handleRegister,
//         handleLogin,
//         handleGetMe,
//     }

// }





// import { useDispatch } from "react-redux";
// import { register, login, getMe } from "../service/auth.api";
// import {
//   setLoading,
//   setUser,
//   setError,
//   setCredentials,
// } from "../auth.slice";

// export function useAuth() {

//   const dispatch = useDispatch();

//   // ✅ REGISTER
//   async function handleRegister({ email, username, password }) {
//     try {

//       dispatch(setLoading(true));

//       const data = await register({ email, username, password });

//       console.log("REGISTER RESPONSE:", data);

//       dispatch(setUser(data.user));

//     } catch (error) {

//       console.log("REGISTER ERROR:", error.response?.data);

//       dispatch(
//         setError(
//           error.response?.data?.message || "Register failed"
//         )
//       );

//     } finally {
//       dispatch(setLoading(false));
//     }
//   }


//   // ✅ LOGIN
//   async function handleLogin({ email, password }) {
//     try {

//       dispatch(setLoading(true));

//       const data = await login({ email, password });

//       console.log("LOGIN RESPONSE:", data);

//       dispatch(
//         setCredentials({
//           user: data.user,
//           token: data.token,
//         })
//       );

//     } catch (error) {

//       dispatch(
//         setError(
//           error.response?.data?.message || "Login failed"
//         )
//       );

//     } finally {
//       dispatch(setLoading(false));
//     }
//   }


//   // ✅ GET ME (MOST IMPORTANT FIX)
//   async function handleGetMe() {

//     try {

//       dispatch(setLoading(true));

//       const data = await getMe();

//       dispatch(setUser(data.user));

//     } catch (err) {

//       // ✅ 401 ko ignore karo (user login nahi hai)
//       if (err.response?.status === 401) {
//         dispatch(setUser(null));
//         return;
//       }

//       dispatch(
//         setError(
//           err.response?.data?.message ||
//           "Failed to fetch user data"
//         )
//       );

//     } finally {

//       dispatch(setLoading(false));

//     }
//   }


//   return {
//     handleRegister,
//     handleLogin,
//     handleGetMe,
//   };

// }




import { useDispatch } from "react-redux";
import { register, login, getMe } from "../service/auth.api";
import { setUser, setLoading, setError } from "../auth.slice";


export function useAuth() {


    const dispatch = useDispatch()

    async function handleRegister({ email, username, password }) {
        try {
            dispatch(setLoading(true))
            const data = await register({ email, username, password })
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Registration failed"))
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleLogin({ email, password }) {
        try {
            dispatch(setLoading(true))
            const data = await login({ email, password })
            dispatch(setUser(data.user))
        } catch (err) {
            dispatch(setError(err.response?.data?.message || "Login failed"))
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleGetMe() {
        try {
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user))
        } catch (err) {
            dispatch(setError(err.response?.data?.message || "Failed to fetch user data"))
        } finally {
            dispatch(setLoading(false))
        }
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe,
    }

}