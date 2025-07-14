
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import axios from 'axios';




const LogIn = () => {
  const { setUser, userToken, setUserToken, api } = useContext(userContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginFunc = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/api/login`, { email, password })
      if (response) {
        console.log(response.data);

        setUserToken(response.data)
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Login HappyShop do Shopping"
  }, [])


  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8 bg-black  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Login your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginFunc}>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6  text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required=""
                placeholder='Enter email'
                className="block w-full rounded-md border-0 py-1.5  text-black outline-none pl-3  "
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6  text-white"
              >
                Password
              </label>
              <div className="text-sm">

              </div>
            </div>
            <div className="mt-2">
              <input
                placeholder='Enter password'
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block w-full rounded-md border-0 py-1.5  outline-none pl-3 text-black"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" flex w-full justify-center pt-13 rounded-md bg-gradient-to-r from-blue-500 to-pink-600 px-3 py-2  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
            <h6 className='text-white text-center my-2'>or</h6>
            <div

              type="submit"
              className="flex w-full cursor-pointer justify-center items-center bg-white  rounded-md border-2 px-3   leading-6 text-black shadow-sm "
            >
              <img src="/google.png" alt="google" className='w-12' />
              <h5 className='font-semibold'>
                Login with Google

              </h5>
            </div>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/signup"
            className="font-semibold leading-6 ml-1 text-indigo-600 hover:text-indigo-500"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>

  )
}

export default LogIn