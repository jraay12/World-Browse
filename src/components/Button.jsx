import React from 'react'

const Button = ({children}) => {
  return (
    <div className='p-2 bg-tertiary text-white rounded-full text-center cursor-pointer '>{children}</div>
  )
}

export default Button