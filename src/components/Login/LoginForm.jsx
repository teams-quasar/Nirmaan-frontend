
// *****DO NOT DELETE THESE COMMENTS********* 

// import React from "react";

// function LoginForm() {
//   return (
//     <form className="flex flex-col mt-40 max-md:mt-10 max-md:max-w-full">
//       <h1 className="text-2xl font-semibold tracking-normal leading-8 text-black">
//         Welcome
//       </h1>
//       <p className="mt-3 text-sm leading-5 text-slate-500">
//         Login to your account
//       </p>
//       <div className="flex flex-col mt-7 text-sm leading-5 whitespace-nowrap max-md:max-w-full">
//         <div className="flex flex-col max-md:max-w-full">
//           <label
//             htmlFor="email"
//             className="font-medium text-slate-900 max-md:max-w-full"
//           >
//             Email
//           </label>
//           <div className="flex flex-col justify-center mt-1.5 text-slate-900 max-md:max-w-full">
//             <input
//               type="email"
//               id="email"
//               className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
//               placeholder="panditprajjawal@gmail.com"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col mt-2 max-md:max-w-full">
//           <label
//             htmlFor="password"
//             className="font-medium text-slate-900 max-md:max-w-full"
//           >
//             Password
//           </label>
//           <div className="flex flex-col justify-center mt-1.5 text-slate-900 max-md:max-w-full">
//             <input
//               type="password"
//               id="password"
//               className="justify-center items-start px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
//               placeholder="******************"
//             />
//           </div>
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="justify-center self-start px-4 py-2 mt-7 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-md bg-slate-900"
//       >
//         Submit
//       </button>
//       <a
//         href="#"
//         className="justify-center self-start mt-5 text-sm font-medium leading-6 rounded-md bg-white bg-opacity-0 text-slate-900"
//       >
//         Forgot your password?
//       </a>
//     </form>
//   );
// }

// *****DO NOT DELETE THESE COMMENTS*********

// export default LoginForm;
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import {login as authLogin } from '../store/authSlice'
import { login as authLogin } from '../../store/authSlice'
// import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from '../../appwrite/auth'
import {useForm} from "react-hook-form"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async(data) => {
      setError("")
      try {
          const session = await authService.login(data)
          if (session) {
              const userData = await authService.getCurrentUser()
              if(userData) dispatch(authLogin(userData));
              navigate("/")
          }
      } catch (error) {
          setError(error.message)
      }
  }

return (
  <div
  className='flex items-center justify-center w-full'
  >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
                  <span className="inline-block w-full max-w-[100px]">
                      {/* <Logo width="100%" /> */}
                  </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">lOG in to your account</h2>
      <p className="mt-2 text-center text-base text-black/60">
                  Don&apos;t have any account?&nbsp;
                  <Link
                      to="/signup"
                      className="font-medium text-primary transition-all duration-200 hover:underline"
                  >
                      Sign Up
                  </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
              <input 
              className =""
              label="Email: "
              placeholder="Enter your email"
              type="email"  
              {...register("email", {
                  required: true,
                  validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
              })}
              />
              <input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                  required: true,
              })}
              />
              <button
              type="submit"
              className="w-full"
              >lOG in</button>
          </div>
      </form>
      </div>
  </div>
)
}

export default Login