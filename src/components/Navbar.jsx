import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';


function Navbar() {
  return (
    <div className='flex items-centre justify-between'>
     <div className='items-centre space-x-10'>
      <Link to='/Men'>Men</Link>
      <Link to='/Women'>Women</Link>
      <Link to='/Accessories'>Accessories</Link>
     </div>

     <div className='w-60 p-5'>
      <img   src={logo} alt="logo"  />
      </div>

      <div className=''>
      <AiOutlineUser className='w-100' />
      <AiOutlineSearch className='w-100' />
      <AiOutlineShoppingCart className='w-100' />
      </div>
     
    </div>

  )
}

export default Navbar