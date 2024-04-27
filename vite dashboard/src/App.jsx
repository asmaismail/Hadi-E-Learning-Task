import React from 'react'
import Appbar from './Components/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Signup, Home, Login, Contact, NoPage} from "./assets/paths";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route paths={Home} element={<Home />} />
    <Route paths={Signup} element={<Signup />} />
    <Route paths={Login} element={<Login />} />
    <Route paths={Contact} element={<Contact />} />
    <Route paths={NoPage} element={<NoPage />} />


      </Routes>
    </BrowserRouter>
      <Appbar/>
    </>
  )
}

export default App