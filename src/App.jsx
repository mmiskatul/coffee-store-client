import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/Hero/Hero'
import Feature from './Components/Feature/Feature'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/' element={<Feature/>}/>

      </Routes>
    </div>
  )
}

export default App