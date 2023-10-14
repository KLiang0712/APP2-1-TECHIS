import React from 'react';
import './App.css';
import Navbar from './component/Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductInfo from './component/ProductInfo'; 
import ProductList from './component/ProductList';

function App() {
  return (
    <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path = '/' exact element = {<ProductList />} />
            <Route path = '/product/:productId' exact element = {<ProductInfo />} />
            <Route>Error 404: Not Found!</Route>
          </Routes>
        </Router>
    </div> 
  );
}

export default App;