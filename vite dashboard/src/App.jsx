import React, { useEffect, useState } from 'react'
import Appbar from './Components/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home, About, Contact, Login, Signup, NoPage } from './assets/paths';
import { PropagateLoader } from "react-spinners";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import NoPage from './Pages/NoPage'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'



const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
            {loading ? (
        <PropagateLoader
          style={{ display: "grid", placeItems: "center", height: "100vh" }}
          color="#073857"
          size={30}
        />
      ) : (
        <div>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NoPage/>} />

      </Routes>
    </BrowserRouter>

    <Appbar/>
        </div>
      )}

    </>
  )
}

export default App


