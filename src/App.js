import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home.component';
import Navbar from './components/navbar.component';
function App() {
  return (
    // <Navbar />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}
export default App;
