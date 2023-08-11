import React from 'react'
import Logo from '../../../assets/logo.png'
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function NavbarLeft() {
  return (
    <div className='flex items-end justify-center'>
    <AiFillShopping size={45} className='text-xl mr-2 hover:text-red-500' />
    <h1 className='text-2xl font-bold mb-1 ml-3 mr-5 hover:text-red-500'><Link to="/">Process Shop</Link></h1>
  </div>
  )
}

export default NavbarLeft