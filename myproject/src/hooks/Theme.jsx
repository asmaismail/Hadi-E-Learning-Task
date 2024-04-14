

const Theme = () => {
    const [darkTheme, setDarkTheme] = useState(false);

const toggleTheme = () => {
  setDarkTheme(!darkTheme);
  document.body.className.backgroundColor = darkTheme ? "dark" : "light"; 
};


  return (
    Theme, toggleTheme
  )
}

export default Theme