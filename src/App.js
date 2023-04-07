import React from 'react';
import './App.css';
import Navbar from './navbar/index.js'
import Body from './body/index.js'

function App(s) {
  return (
      <div className="wrap">
        <Navbar/>
        <Body/>
      </div>
  );
}

export default App;
