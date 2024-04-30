import React, { useEffect, useState } from 'react'
import Appbar from './Components/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Signup, Home, Login, Contact, NoPage} from "./assets/paths";
import { PropagateLoader } from "react-spinners";



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
  <Route paths={Home} element={<Home />} />
  <Route paths={Signup} element={<Signup />} />
  <Route paths={Login} element={<Login />} />
  <Route paths={Contact} element={<Contact />} />
  <Route paths={NoPage} element={<NoPage />} />
  
  
    </Routes>
  </BrowserRouter>
    <Appbar/>
        </div>
      )}

    </>
  )
}

export default App


