import React from 'react'
import SearchBar from './atoms/SearchBar'

const Header = () => {
  return (
    <div className='flex align-center justify-between mx-32 my-10'>
        <p className='text-4xl font-bold tracking-wide' >Search properties to rent</p>
        <SearchBar text={"Search with SearchBar"} />
    </div>
  )
}

export default Header