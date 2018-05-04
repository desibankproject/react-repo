import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    const imgStyle={
       height:"200px"
    };

    return (
      <div className="App">
        <Header color="blue" title="Hey! this is my first react js application!"/>
        <p className="App-intro">
           <img src="../img/img-1.jpg" style={imgStyle}/> 
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
