import React from 'react'

const Button = ({children, type='button', bgColor='bg-blue-600', textColor='text-white', className, ...props}) => {
  return (
      <button {...props} type={type} className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`}>{children}</button>
  )
}

export default Button