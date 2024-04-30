import React from 'react'

const Button = ({children}) => {
  return (
    <div>
     <button style={{borderRadius:'5px',padding:'18px', border:'none', marginTop:'10px', backgroundColor:'#073857',color:'white', cursor:'pointer'}}>{children}</button>
    </div>
  )
}

export default Button