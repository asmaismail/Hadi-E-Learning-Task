
import React, { useState } from "react";
import Navbar from "./Navigation";
import "./style.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className.backgroundColor = darkTheme ? "dark" : "light"; 
  };

  return (
    <div className={`${darkTheme ? "dark" : "light"}`} style={{ width: "100%", minHeight:'100vh' }}>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <div className="mt-5">

      </div>
    </div>
  );
};

export default App;

