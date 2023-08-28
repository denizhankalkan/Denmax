

import React from 'react';
import  ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NewPage from './components/PlanPage/plan';
import {createRoot} from 'react-dom/client';
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/new-page" element={ <NewPage /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);