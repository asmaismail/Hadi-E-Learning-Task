import TopHeader from "./Components/TopHeader";


function App() {
  const [theme, setTheme] = useState('true')
  const [value, setValue] = useState()

  return (
    <TopHeader value={value} />
  );
}

export default App;