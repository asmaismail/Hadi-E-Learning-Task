import React from 'react'
import Footer from '../Components/Footer'
import Breadcrumbs from '../../Reuseables/Breadcrumbs'


const Settings = () => {
  const breadcrumbItems = [
    {
      // icon: <HelpCenterOutlined />,
      title: 'Settings',
    },
  ]
  
  
  return (
    <>Settings
    <Breadcrumbs className='mt-10' items={breadcrumbItems}   />
    <Footer/>
    </>
  )
}

export default Settings