import React, { Component } from 'react'
import logo from './logo.png'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React by Agaetis</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/scenes/Home/index.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home
