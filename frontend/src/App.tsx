import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './routes/Search';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/search" element={ <Search/> } />
      </Routes>
    </div>
  );
}

export default App;
