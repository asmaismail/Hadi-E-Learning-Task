import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Navigation({ darkTheme, toggleTheme }) {
  return (
    <Navbar className={`${darkTheme ? "dark" : "light"}`}>
      <Container className='border-bottom'>
        <Navbar.Brand className={`${darkTheme ? "dark" : "light"}`} href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button style={{ padding: '15px', border: '0px' }} className={`${darkTheme ? "dark" : "light"}`} onClick={toggleTheme}>{darkTheme ? <FiSun /> : <FaRegMoon />}</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
