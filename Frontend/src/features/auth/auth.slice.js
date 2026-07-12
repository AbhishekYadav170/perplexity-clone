// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: null,
//         token:null,
//         loading: true,
//         error: null,
//     },
//     reducers: {
//         setUser: (state, action)=>{
//             state.user = action.payload
//         },
        
//         setCredentials: (state, action) => {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//         },
//         setLoading: (state,action) => {
//             state.loading = action.payload
//         },
//         setError: (state, action)=> {
//             state.error = action.payload
//         }
//     }
// })

// export const {setUser, setCredentials, setLoading, setError } =authSlice.actions;
// export default authSlice.reducer



import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: true,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setUser, setLoading, setError } = authSlice.actions
export default authSlice.reducer