import './App.css';

import React, { Component } from 'react'
import ButtonAppBar from './components/NavBar'
import HeaderGrid from './components/Header'
import AboutGrid from './components/About'
import PortfolioGrid from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <HeaderGrid />
        <AboutGrid />
        <PortfolioGrid />
      </div>
    )
  }
}
export default App