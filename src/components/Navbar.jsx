import React from 'react'
import Button from './atoms/Button';
import {RiHomeSmile2Fill} from 'react-icons/ri' 
import NavButton from './atoms/NavButton';
import NavList from './atoms/NavList';

const Navbar = () => {

  return (
    <nav className="bg-violet-100 shadow-lg py-4">
      <div className="container flex flex-wrap items-center justify-between ">
          <div className='flex flex-wrap items-center' >
            <a href="#" className="flex ml-6">
            <RiHomeSmile2Fill size="2rem" color="rgb(124 58 237 )" />
                <span className="self-center text-lg font-bold tracking-wide text-violet-600 ">Estatery</span>
            </a>
            <div className='hidden md:block'>
            <NavButton text={"Rent"}  />
            <NavButton text={"Buy"}  />
            <NavButton text={"Sell"}  />
            <NavList text={"Manage Property"} />
            <NavList text={"Resources"} />
            </div>
          </div>
          <div >
            <Button customClass={"bg-white border-2 hover:bg-violet-100 text-violet-600 transition-all hover:border-gray-500"} text={"Login"} />
            <Button  customClass={"bg-violet-600 text-white hover:bg-violet-700 transition-all"} text={"Sign Up"} />
          </div>
      </div>
    </nav>
  )
}

export default Navbar