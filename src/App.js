import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './components/Router';
import Home from './containers/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
