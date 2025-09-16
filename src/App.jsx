import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Home from './Page/Home'
import AddCoffee from './Components/AddCoffee/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addcoffee' element={<AddCoffee/>}/>
        <Route path='/updatecoffee' element={<UpdateCoffee/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App