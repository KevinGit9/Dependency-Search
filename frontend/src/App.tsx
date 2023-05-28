import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './routes/Search';
import Home from './routes/Home';
import Header from './components/Header';
import WhiteSpace from './components/WhiteSpace';

function App() {
  return (
    <div className="App">
      <Header/>
      <WhiteSpace/>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/search" element={ <Search/> } />
      </Routes>
    </div>
  );
}

export default App;
