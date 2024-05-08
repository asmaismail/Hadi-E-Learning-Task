import React from 'react'
import Carusel from '../../Reuseables/Carusel'
import HomePageCards from '../../Reuseables/HomePageCards'
import '../../App.css'
import CounterUp from '../../Reuseables/CounterUp'

const Landing = () => {
  return (
    <>
    <div>
      <div className='responsive'>
        <div>
        </div>

      </div>
      <CounterUp/>
      <HomePageCards/>
      <Carusel/>
    </div>
    </>
  )
}

export default Landing