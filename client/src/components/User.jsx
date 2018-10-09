import React, { Component } from 'react'
import axios from 'axios'

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

  render() {
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
      </div>
    )
  }
}
