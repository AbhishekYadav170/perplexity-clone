// import React, { useState } from 'react'

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
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

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Register Form Data:', formData)
//     // Handle registration logic here
//     alert(`Registering account for: ${formData.username}`)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">z
//         <div className="bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-700">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-2">
//               Join Us
//             </h1>
//             <p className="text-gray-400">Create your account to get started</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Username Field */}
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Choose your username"
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
//               />
//             </div>

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

//             {/* Terms */}
//             <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
//               <input type="checkbox" required className="w-4 h-4 bg-gray-800 border border-gray-700 rounded accent-red-500" />
//               <span>I agree to the <a href="#" className="text-red-500 hover:text-red-400 transition">Terms and Conditions</a></span>
//             </label>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-6 text-center text-gray-400">
//             <p>
//               Already have an account?{' '}
//               <a href="/login" className="text-red-500 hover:text-red-400 font-semibold transition">
//                 Sign in
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register




import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (event) => {
    event.preventDefault()

    const payload = {
      username,
      email,
      password,
    }

    console.log('Register payload:', payload)
  }

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-zinc-900/70 p-8 shadow-2xl shadow-black/50 backdrop-blur">
          <h1 className="text-3xl font-bold text-[#31b8c6]">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-zinc-300">
            Register with your username, email, and password.
          </p>

          <form onSubmit={submitForm} className="mt-8 space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-zinc-200">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Choose a username"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

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
                placeholder="Create a password"
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none ring-0 transition focus:border-[#31b8c6] focus:shadow-[0_0_0_3px_rgba(49,184,198,0.25)]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#31b8c6] px-4 py-3 font-semibold text-zinc-950 transition hover:bg-[#45c7d4] focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,184,198,0.35)]"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-300">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#31b8c6] transition hover:text-[#45c7d4]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register