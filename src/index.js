

import React from 'react';
import  ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import {createRoot} from 'react-dom/client';
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <React.StrictMode>
//       <BrowserRouter>
//          <App />
//       </BrowserRouter>
//    </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);