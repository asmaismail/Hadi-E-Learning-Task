import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Contact from "../Pages/Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/ContactSupport";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import '../assets/style.css'


const drawerWidth = 240;

function Appbar(props) {
  const [greeting, setGreeting] = React.useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Good morning!");
    } else if (currentTime >= 12 && currentTime < 17) {
      setGreeting("Good afternoon!");
    } else if (currentTime >= 17 && currentTime < 21) {
      setTimeOfDay("Good Evening");
    } else {
      setGreeting("Good Night!");
    }
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{ backgroundColor: "#F1F1F1", cursor:'pointer' , height:'100vh'}}>
      <h2 style={{ textAlign: "center", alignItems: "center" }}>Dashboard</h2>
      <Divider />
      <List style={{display:'flex',flexDirection:'column', height:'70vh' ,justifyContent:'right', alignItems:'flex-start', marginLeft:'18px'}}>
        <p  onClick={<Link to ='/'/>} style={{display:'flex',  justifyContent:'center', alignItems:'center', textAlign:'center', gap:'7px'}}><HomeIcon style={{color:'gray',}}/> Home</p>
        <p onClick={<Link to ='/about'/>}  style={{display:'flex',  justifyContent:'center', alignItems:'center', textAlign:'center', gap:'7px'}}><InfoIcon style={{color:'gray', }}/> About us</p>
        <p  style={{display:'flex',  justifyContent:'center', alignItems:'center', textAlign:'center', gap:'7px'}}><ContactIcon style={{color:'gray', }}/> Contact</p>
        <p  style={{display:'flex',  justifyContent:'center', alignItems:'center', textAlign:'center', gap:'7px'}}><AccountCircleIcon style={{color:'gray'}}/> Profile</p>
        <p  style={{display:'flex',  justifyContent:'center', alignItems:'center', textAlign:'center', gap:'7px'}}><SettingsIcon style={{color:'gray' }}/> Settings</p>
      </List>
      <div
        style={{
          marginBottom: "0%",
          position: "fixed",
          textAlign: "end",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: "40%",
          bottom: 0,
          backgroundColor:'#F1F1F1'
        }}
      >
        <Divider style={{marginTop:'200px', width:'17vw'}} />
        <p
          style={{
            display:'flex',
            textAlign: "right",
            width:'7vw',
            marginLeft:'17px',
            justifyContent: "flex-start",
            bottom: "0%",
            height: "20%",
          }}
        >
           <LogoutIcon style={{color:'gray'}}/>  Logout
        </p>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#073857" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "white", marginRight: "2px" }} />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90vw",
              justifyContent: "space-between",
            }}
          >
            <h2>Welcome</h2>
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <LogoutIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          // flexGrow: 1,
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* <NoPage/> */}
        {/* <Login/> */}
        {/* <Home/> */}
        <Contact />
        <Footer style={{ textAlign: "center" }} />
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Appbar;
