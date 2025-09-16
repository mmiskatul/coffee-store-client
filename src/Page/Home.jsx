import React from 'react'
import Feature from '../Components/Feature/Feature'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center  bg-white'>
       <Hero/>
      <Feature/>
      <Products/>
    </div>
  )
}

export default Home