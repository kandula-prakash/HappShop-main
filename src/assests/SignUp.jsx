import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import { toast, ToastContainer } from 'react-toastify'
import { userContext } from '../App'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { api } = useContext(userContext)
  const [toggle, setToggle] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setToggle(true)
    try {
      const response = await axios.post(`${api}/api/signup`, { email, password })
      if (response) {
        toast.success("signup completed successfully")
        navigate("/login")
        setToggle(false)
      }
    } catch (error) {
      console.error(error);
      toast.error("please try again or email already taken")
      setToggle(false)

    }
  }



  useEffect(() => {
    document.title = "Create new account"
  }, [])
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-col bg-black justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

          <h2 className="mt-10 text-center text-2xl text-white font-bold leading-9 tracking-tight ">
            Create new account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" autoComplete='off' onSubmit={onSubmitFunction}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5  outline-none pl-3 text-black"
                />
              </div>
            </div>
            <div>

              {toggle ?
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-orange-500 to-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Signing up...
                </button> : <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-orange-500 to-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>}

            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>

  )
}

export default SignUp