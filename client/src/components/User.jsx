import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class User extends Component {
    state = {
        user: {},
        cigars: []
    }

    getUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        console.log(response)
        this.setState({
            user: response.data,
            cigars: response.data.cigarLog
        })
    }

    componentDidMount = () => [
        this.getUser()
    ]

    handleDelete = async () => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}`)
        this.setState({ redirect: true })
    }

  render() {
      if (this.state.redirect){
          return <Redirect to='/home'/>
      }
      const cigarsList = this.state.cigars.map((cigar, i) => {
          return <div key={i}>
            {cigar.cigarName}

          </div>
      })
    return (
      <div>
          Single User 
          <h1>{this.state.user.userName}</h1>
          {cigarsList}
          <button onClick={() => this.handleDelete()}>Delete User</button>
      </div>
    )
  }
}
