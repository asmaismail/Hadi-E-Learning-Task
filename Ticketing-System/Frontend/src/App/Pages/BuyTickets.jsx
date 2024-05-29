import React from 'react'
import Footer from '../Components/Footer'
import Breadcrumbs from '../../Reuseables/Breadcrumbs'

const BuyTickets = () => {
  const breadcrumbItems = [
    {
      // icon: <HelpCenterOutlined />,
      title: 'Buy Tickets',
    },
  ]
  
  return (
    <>BuyTickets
          <Breadcrumbs className='mt-10' items={breadcrumbItems}   />
    <Footer/>
    </>
  )
}

export default BuyTickets