import React from 'react'
import Heading from './Heading'
import { FaListUl } from "react-icons/fa";

const List = () => {
  return (
    <>
    <div className=''>
        <Heading title={List} icon={<FaListUl size={30}/>} />
    </div>
    </>
  )
}

export default List