import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DependencySearch from './routes/DependencySearch';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/search" element={ <DependencySearch/> } />
      </Routes>
    </div>
  );
}

export default App;
