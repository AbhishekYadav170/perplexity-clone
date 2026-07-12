// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
// import { login } from '../service/auth.api'
// import { setUser } from '../auth.slice'
// import { useDispatch } from 'react-redux'


// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleSubmit =  (e) => {
//     e.preventDefault()
//     try {
//       console.log('Login Form Data:', formData)

//       dispatch(setUser(data.user))
//       // Handle login logic here
//       alert(`Logging in with email: ${formData.email}`)

//       navigate("/")
//     } catch (error) {
//       console.error("Login error:", error)
//       alert("Login failed")

//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-700">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
//               Welcome Back
//             </h1>
//             <p className="text-gray-400">Sign in to your account</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
//               />
//             </div>

//             {/* Remember Me */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4 bg-gray-800 border border-gray-700 rounded accent-red-500" />
//                 <span>Remember me</span>
//               </label>
//               <a href="#" className="text-sm text-red-500 hover:text-red-400 transition">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-6 text-center text-gray-400">
//             <p>
//               Don't have an account?{' '}
//               <a href="/register" className="text-red-500 hover:text-red-400 font-semibold transition">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'


const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)

    const { handleLogin } = useAuth()

    const navigate = useNavigate()

    const submitForm = async (event) => {
        event.preventDefault()

        const payload = {
            email,
            password,
        }

        await handleLogin(payload)
        navigate("/")

    }

    if(!loading && user){
        return <Navigate to="/" replace />
    }

    return (
        <section className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-zinc-900/70 p-8 shadow-2xl shadow-black/50 backdrop-blur">
                    <h1 className="text-3xl font-bold text-[#31b8c6]">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-zinc-300">
                        Sign in with your email and password.
                    </p>

                    <form onSubmit={submitForm} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#31b8c6] px-4 py-3 font-semibold text-zinc-950 transition hover:bg-[#45c7d4] focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,184,198,0.35)]"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-zinc-300">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="font-semibold text-[#31b8c6] transition hover:text-[#45c7d4]">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login