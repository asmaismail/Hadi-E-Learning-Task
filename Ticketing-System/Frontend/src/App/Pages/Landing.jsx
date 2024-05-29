import React from 'react'
import Carusel from '../../Reuseables/Carusel'
import HomePageCards from '../../Reuseables/HomePageCards'
import '../../App.css'
import CounterUp from '../../Reuseables/CounterUp'
import Footer from '../Components/Footer'
import Breadcrumbs from '../../Reuseables/Breadcrumbs'


const Landing = () => {
  // const breadcrumbItems = [
  //   {
  //     // icon: <HelpCenterOutlined />,
  //     title: '',
  //   },
  // ]
  
  return (
    <>
              {/* <Breadcrumbs className='mt-10' items={breadcrumbItems}   /> */}
    <div>
      <div className='responsive'>
        <div>
        </div>

      </div>
      <CounterUp/>
      <HomePageCards/>
      <Carusel/>
    </div>
    <Footer/>
    </>
  )
}

export default Landing