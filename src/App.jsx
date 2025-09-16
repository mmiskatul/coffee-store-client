import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Home from './Page/Home'
import AddCoffee from './Components/AddCoffee/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addcoffee' element={<AddCoffee/>}/>
        <Route path='/updatecoffee' element={<UpdateCoffee/>}/>


      </Routes>
      
    </div>
  )
}

export default App