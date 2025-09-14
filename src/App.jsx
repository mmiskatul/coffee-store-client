import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Home from './Page/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App