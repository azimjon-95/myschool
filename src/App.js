import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import AddProducts from './components/addProducts/AddProducts';
import { Route, Routes } from 'react-router-dom'
import SinglePage from './components/singlePage/SinglePage';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/product/single/page" element={<SinglePage />} />
      </Routes>
    </div>
  )
}

export default App;
