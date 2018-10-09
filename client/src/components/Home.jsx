import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        users:[],
        newUser: {
            userName:''
        },
        createError: false
    }

componentDidMount = async () => {
    const response = await axios.get('/api/users')
    console.log('Home component', response)
    this.setState({ users: response.data })
}

handleChange = (e) => {
    if (this.state.createError) {
        this.toggleCreateError()
    }
    const newUser = {...this.state.newUser}
    newUser[e.target.name] = e.target.value
    this.setState({ newUser })
}

handleSubmit = async (e) => {
    e.preventDefault()
    if (this.state.newUser.userName.length < 4){
        this.toggleCreateError()
        return
    }
    const response = await axios.post('/api/users', this.state.newUser)
    const users = [...this.state.users]
    users.push(response.data)
    this.setState({users})
}

toggleCreateError = () => {
    this.setState({ createError: !this.state.createError})
}



  render() {
      const usersList = this.state.users.map((user, i) => {
          return (
              <div key={i}>
                <Link to ={`/users/${user._id}`}>
                    {user.userName}
                </Link>
                <div>
                {user.age}, {user.location}
                </div>
              </div>
          )
      })
    return (
      <div>
        Home
        {usersList}
        <form onSubmit={this.handleSubmit}>
            <input type='text' name='userName' value={this.state.newUser.userName} onChange={this.handleChange}/>
            <input type='submit' value='Create New User' />
        </form>
        {this.state.createError ?
        <div>
            <p>user name must be four characters or longer</p>
        </div> :
        null}

      </div>
    )
  }
}
