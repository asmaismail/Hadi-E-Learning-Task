import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopHeader = () => {
    const togglebtn = () =>{
        setTheme(!theme);
    }
  return (

    <Navbar value={value} onChange={e => setValue(e.target.value)}>
      <Container  className='border-bottom p-3'>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         <button onClick={togglebtn()} className={`${theme ? 'light' : 'dark'}`}>{`${theme ? "🌙" : "☀️"}`} </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
)

}

export default TopHeader