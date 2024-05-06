import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='px-9 py-3 mt-6 ml-0 cursor-pointer rounded-md text-white bg-[#4c1d95] '>{children}</button>

    </div>
  )
}

export default Button