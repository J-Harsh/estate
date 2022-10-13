import React from 'react'

const NavButton = ({text}) => {
  return (
    <button className='bg-inherit hover:bg-violet-200 hover:text-violet-700 rounded transition-all font-semibold px-4 py-2 mx-8 ' >{text}</button>
  )
}

export default NavButton