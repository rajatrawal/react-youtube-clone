import React from 'react'

const Button = ({ text }) => {
  return (
    <div className='inline px-3 py-1   bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 cursor-pointer mr-4' > {text}</div >
  )
}

export default Button