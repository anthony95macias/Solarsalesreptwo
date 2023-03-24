import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import WhoAmI from './pages/WhoAmI';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
