import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class Home extends Component {
  state = {
    users: [],
    newUser: {
      userName: '',
      age: '',
      location: '',
      image: ''
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
        <div className='margins' key={i}>
        <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 'auto', maxWidth: '500px' }}>
          <Link to={`/users/${user._id}`}>
          <img src={user.image} className='profile' alt='user'/>
            <div className='list'>
              {user.userName}
              <div>
                {user.age}, {user.location}
              </div>
            </div>
          </Link>
        </Paper>
        </div>
      )
    })
    return (
      <div>
        <div className="header">Users</div>
        <div>
          {usersList}

          {this.state.createUser ?
            <div className="margins">
              <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 'auto', maxWidth: '500px' }}>
                <form onSubmit={this.handleNew}>
                  <div>
                    <input type='text' name='userName' value={this.state.newUser.userName} placeholder='User Name' onChange={this.handleChange} />
                    <input type='text' name='age' value={this.state.newUser.age} placeholder='Age' onChange={this.handleChange} />
                    <input type='text' name='location' value={this.state.newUser.location} placeholder='Location' onChange={this.handleChange} />
                    <input type='text' name='image' value={this.state.newUser.image} placeholder='Image Url' onChange={this.handleChange}/>
                    <div><Button variant="contained" style={{ backgroundColor: '#118293', color: '#F9A05C', margin: 10 }} type='submit'>Create New User</Button></div>
                  </div>
                </form>
              </Paper> 
            </div>: 
            null
          }

          <Button variant="contained" style={{ backgroundColor: '#118293', color: '#F9A05C' }} onClick={() => this.toggleCreateUser()}>{this.state.createUser ? 'Cancel' : <AddIcon />} </Button>
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
