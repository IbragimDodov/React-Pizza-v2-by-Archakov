import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './components/FullPizza';


import './scss/app.scss'
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart/>} />
        <Route path='pizza/:id' element={<FullPizza/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;