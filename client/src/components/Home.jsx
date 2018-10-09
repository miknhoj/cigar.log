import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        users:[],
    }

componentDidMount = async () => {
    const response = await axios.get('/api/users')
    console.log('Home component', response)
    this.setState({ users: response.data })
}

  render() {
      const usersList = this.state.users.map((user, i) => {
          return (
              <div key={i}>
                <Link to ={`/users/${user._id}`}>
                    {user.userName}
                </Link>
              </div>
          )
      })
    return (
      <div>
        Home
        {usersList}
      </div>
    )
  }
}