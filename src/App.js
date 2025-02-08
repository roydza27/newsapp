import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
