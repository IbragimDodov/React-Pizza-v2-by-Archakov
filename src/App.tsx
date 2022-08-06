import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss'
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './components/FullPizza'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Suspense fallback={<div>loading...</div>}><Cart/></Suspense>} />
        <Route path='pizza/:id' element={<Suspense fallback={<div>loading...</div>}><FullPizza/></Suspense>} />
        <Route path='*' element={<Suspense fallback={<div>loading...</div>}><NotFound/></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;