import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h4 className='text-xl'>--- Sip & Savor ---</h4>
      <h1 className='text-4xl'>Our Popular Products</h1>
      <Link to='/addcoffee' className='btn  bg-[#E3B577] text-[#] text-normal'>
        Add Coffee
      </Link>
    </div>
  )
}

export default Products