import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import WhoAmI from './pages/WhoAmI';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/whoami" element={<WhoAmI />} />
      </Routes>
    </Router>
  );
}

export default App;
