import React, { useState } from 'react'
const Theme = () => {
    const [theme, setTheme] = useState()
    const themehandler =() =>{
        setTheme(e.target.theme)
        localStorage.setItem('value', e.target.theme)
    }
  return (
    <>
    
    </>
  )
}

export default Theme