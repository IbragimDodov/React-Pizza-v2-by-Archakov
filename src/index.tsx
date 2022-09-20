import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './Redux/store';

const rootElem = document.getElementById('root');

if (rootElem) {

  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter basename='/React-Pizza-v2-by-Archakov/'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};


