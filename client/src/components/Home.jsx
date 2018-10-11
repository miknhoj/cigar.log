import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class Home extends Component {
  state = {
    users: [],
    newUser: {
      userName: '',
      age: '',
      location: ''
    },
    createUser: false,
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
    const newUser = { ...this.state.newUser }
    newUser[e.target.name] = e.target.value
    this.setState({ newUser })
  }

  handleNew = async (e) => {
    e.preventDefault()
    if (this.state.newUser.userName.length < 4) {
      this.toggleCreateError()
      return
    }
    const response = await axios.post('/api/users', this.state.newUser)
    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })
  }

  toggleCreateError = () => {
    this.setState({ createError: !this.state.createError })
  }

  toggleCreateUser = () => {
    this.setState({ createUser: !this.state.createUser })
  }

  render() {
    const usersList = this.state.users.map((user, i) => {
      return (
        <div key={i}>
          <Link to={`/users/${user._id}`}>
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

        {this.state.createUser ?
          <form onSubmit={this.handleNew}>
            <input type='text' name='userName' value={this.state.newUser.userName} placeholder='User Name' onChange={this.handleChange} />
            <input type='text' name='age' value={this.state.newUser.age} placeholder='Age' onChange={this.handleChange} />
            <input type='text' name='location' value={this.state.newUser.location} placeholder='Location' onChange={this.handleChange} />
            <input type='submit' value='Create New User' />
          </form> :
          null
        }
        {/* <Icon className={classes.icon} color="secondary">
        add_circle
      </Icon> */}
        <button onClick={()=>this.toggleCreateUser()}>{this.state.createUser ? 'Cancel' : 'Add New User'} </button>
        {this.state.createError ?
          <div>
            <p>user name must be four characters or longer</p>
          </div> :
          null
        }
      </div >
    )
  }
}
