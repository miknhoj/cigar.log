import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
          <h3>Welcome to</h3>
          <h1>Cigar.log</h1>
          <Link to ='/home'>Click</Link>
      </div>
    )
  }
}
