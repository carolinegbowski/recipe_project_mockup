import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './components/Router';
import Home from './containers/Home';
import UserHomePage from './components/UserHomepage'
import Footer from './containers/Footer';

function App() {
  let id = sessionStorage.getItem('id')
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
