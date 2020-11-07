import './App.css';

import React, { Component } from 'react'
import ButtonAppBar from './components/NavBar'
import HeaderGrid from './components/Header'
import AboutGrid from './components/About'

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <HeaderGrid />
        <AboutGrid />

      </div>
    )
  }
}
export default App