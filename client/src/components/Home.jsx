import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddButton from './Layout/AddButton';
import { Paper } from '@material-ui/core';


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
    console.log("toggling")
    this.setState({ createUser: !this.state.createUser })
  }

  render() {
    const usersList = this.state.users.map((user, i) => {
      return (
        <Paper key={i}>
          <div className='userList'>
            <Link to={`/users/${user._id}`}>
              {user.userName}
            </Link>
            <div>
              {user.age}, {user.location}
            </div>
          </div>
        </Paper>
      )
    })
    return (
      <div>
        <h1>Users</h1>
          <div>
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

            <Button variant="contained" color="primary" onClick={() => this.toggleCreateUser()}>{this.state.createUser ? 'Cancel' : 'Add New User'} </Button>
            <AddButton toggleCreateUser={this.toggleCreateUser}>{this.state.createUser ? 'Cancel' : 'Add New User'} </AddButton>
          </div>

        
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
