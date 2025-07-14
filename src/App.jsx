import React, { useState } from 'react'
import './App.css'
import Navbar from './assests/Navbar'
import Home from './assests/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProductReview from './assests/ProductReview'
import Cart from './assests/Cart'
import SignUp from './assests/SignUp'
import LogIn from './assests/LogIn'
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react'

export const userContext = createContext()

const App = () => {
  const api = import.meta.env.VITE_API
  const [user, setUser] = useState({})
  const [userToken, setUserToken] = useState("")

  return (
    <userContext.Provider value={{ user, setUser, userToken, setUserToken, api }}>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ProductReview />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />

        </Routes>

      </Router>
    </userContext.Provider>

  )
}

export default App