import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';


function Navbar() {
  return (
    <div className='flex items-centre justify-between bg-slate-400 text-xl'>
     <div className='items-centre space-x-10 p-8' >
      <Link to='/Men'>Men</Link>
      <Link to='/Women'>Women</Link>
      <Link to='/Accessories'>Accessories</Link>
     </div>

     <div className='w-60 p-3'>
      <img   src={logo} alt="logo"  />
      </div>

      <div className=''>
      <ul className='flex flex-row space-x-10 p-8 justify-end items-center text-2xl'>
        <li>
          <a className='cursor-pointer'><AiOutlineUser /></a>
          </li>
        <li>
          <a className='cursor-pointer'><AiOutlineSearch /></a>
        </li>
        <li>
          <a className='cursor-pointer'><AiOutlineShoppingCart /></a></li>
      </ul>
      </div>
     
    </div>

  )
}

export default Navbar