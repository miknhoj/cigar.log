import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="welcome-page">
          <div className="intro">Welcome to</div>
          <div className="title">Cigar.log</div>
          <div className="intro">the app to help you keep track of the cigars you enjoy. </div>
          <div className="click">Click the fire to begin.</div>
          <Link to ='/home'><img src="https://ubisafe.org/images/fire-svg-1.png" alt={'have to be'}/></Link>
          
      </div>
    )
  }
}
