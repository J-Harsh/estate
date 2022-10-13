import React from 'react'

const Button = ({handleClick,text,customClass}) => {
  return (
    <button onClick={handleClick} className={`${customClass} font-semibold rounded px-4 py-2 mx-2`} >{text}</button>
  )
}

export default Button