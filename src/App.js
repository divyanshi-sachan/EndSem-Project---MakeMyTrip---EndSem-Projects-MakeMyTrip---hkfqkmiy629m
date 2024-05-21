import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Hotels from './components/Hotels';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/hotels' element={<Hotels />} />
      </Routes>
    </Router>
  );
};

export default App;



