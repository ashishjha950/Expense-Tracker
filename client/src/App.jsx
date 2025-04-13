import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Accounts from './pages/Accounts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/accounts" element={<Accounts/>} />
      </Routes>
      </Router>
  )
}

export default App