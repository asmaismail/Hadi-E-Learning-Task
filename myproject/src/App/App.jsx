
import React, { useState } from "react";
import Navbar from "./Navigation";
import "./style.css";
import ShuffleComponent from "./Components/ShuffleComponent";
import Categories from "./Components/Categories";
import { List } from "./Components/List";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [whichcomp, setWhichcomp] = useState('cats')
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className.backgroundColor = darkTheme ? "dark" : "light"; 
  };
  return (
    <div className={`${darkTheme ? "dark" : "light"}`} style={{ width: "100%", minHeight:'100vh' }}>
      <Navbar  darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <div className="mt-5">
        {/* { ShuffleComponent ==== 'cats' ? <Categories cats={cats} newcats={newcats} /> : <List/> } */}
        {
          whichcomp === 'cats' ?
            <Categories
              cats={cats}
              newCats={newCats}
            /> :
            <List />
        }
      </div>
    </div>
  );
};

export default App;

