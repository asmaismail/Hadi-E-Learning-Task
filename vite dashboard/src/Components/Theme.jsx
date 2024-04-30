// import React, { useState, useEffect, createContext, useContext } from "react";
// import "../assets/style.css";

// // Creating a context to manage the theme state
// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//     const [dark, setDark] = useState(() => {
//       const savedTheme = localStorage.getItem("theme");
//       return savedTheme ? JSON.parse(savedTheme) : false;
//     });
  
//     useEffect(() => {
//       localStorage.setItem("theme", JSON.stringify(dark));
//     }, [dark]);
  
//     return (
//       <ThemeContext.Provider value={{ dark: dark || false, setDark }}>
//         {children}
//       </ThemeContext.Provider>
//     );
//   };
  

// // Custom hook to use theme context
// const useTheme = () => useContext(ThemeContext);

// const Theme = () => {
//   const { dark, setDark } = useTheme();

//   const handletoggle = () => {
//     setDark(!dark);
//   };

//   return (
//     <div>
//       <button className={dark ? "dark" : ""} onClick={handletoggle}>
//         {dark ? "🌙" : "☀️"}
//       </button>
//     </div>
//   );
// };

// export default Theme;
