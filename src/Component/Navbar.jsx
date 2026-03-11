import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

export const Navbar = () => {


  return (
    <div>
      <h6> Navbar </h6>
      <main className="flex justify-center font-family-mono font-style-italic text-3xl font-bold text-rose-700">Welcome
         </main>
      <p className="text-pink-100/50 font-style-italic">Welcome to my website of the latest products at a discounted price.</p>
   
       <nav className=" container mx-auto flex justify-start bg-rose-800 text-700 w-full p-4">
      <div className= "mx-auto flex justify-start text-700">
      <ul className='flex space-x-6 text-pink-100/50'>
        <li>
          <NavLink to="Home" className="hover:text-pink-100">Home</NavLink>
          </li>
        <li>
          <NavLink to="Product" className="hover:text-pink-100">Product</NavLink>
          </li>
        <li>
          <NavLink to="Checkout" className="hover:text-pink-100">Checkout</NavLink>
          </li>
        </ul>
    </div>
    </nav>
    </div>
    
  )
}
