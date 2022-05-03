import React from 'react';

import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
       <Route path='home' element={< Page1 />}/>
       <Route path='business' element={< Page2 />}/>
      </Routes>
    </Router>
  );
}

export default App;
