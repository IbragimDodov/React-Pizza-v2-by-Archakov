import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss'

export const SearchContext = React.createContext();


function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header/>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<NotFound/>} />
              
            </Routes>
          </div>
        </SearchContext.Provider>
    </div>
    </div>
  );
}

export default App;
