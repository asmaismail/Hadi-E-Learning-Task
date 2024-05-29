import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/Components/Appbar'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AppRouting from './App/AppRouting'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    {/* <AppRouting> */}
    <App/>
    {/* </AppRouting> */}
  </Router>,
)
