import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="welcome-page">
          <div className="welcome">Welcome to</div>
          <div className="title">Cigar.log</div>
          <h3>the app to help you keep track of the cigars you enjoy.</h3>
          <Link to ='/home'><img src="https://ubisafe.org/images/fire-svg-1.png" alt={'have to be'}/></Link>
          
      </div>
    )
  }
}
