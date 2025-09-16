import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products,setProducts]=useState(null);
    useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);
  return (
    <div className='flex py-20 flex-col items-center justify-center space-y-5'>
      <h4 className='Raleway text-xl'>--- Sip & Savor ---</h4>
      <h1 className='text-4xl'>Our Popular Products</h1>
      <Link to='/addcoffee' className='btn  bg-[#E3B577] text-[#] text-normal'>
        Add Coffee
      </Link>
      <div>
       
      </div>
    </div>
  )
}

export default Products