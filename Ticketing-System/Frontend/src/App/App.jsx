import React, { useEffect, useState } from 'react'
import { PropagateLoader } from "react-spinners";
import Appbar from './Components/Appbar'

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
      {/* <Appbar/> */}
    </div>
  )}
    </>

  )
}

export default App