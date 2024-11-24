// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './assets/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './assets/Login'
import Home from './assets/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
