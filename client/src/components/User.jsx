import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import NewCigarForm from './NewCigarForm';

export default class User extends Component {
  state = {
    user: {},
    cigars: [],
    updateUser: false,
    redirect: false
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
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

  handleChange = (e) => {
    const updatedUser = { ...this.state.user }
    updatedUser[e.target.name] = e.target.value
    this.setState({ user: updatedUser })
  }

  handleUpdate = async (e) => {
    const userId = this.props.match.params.userId
    const updatedUser = this.state.user
    await axios.put(`/api/users/${userId}`, updatedUser)
  }

  toggleUpdateUser = () => {
    this.setState({ updateUser: !this.state.updateUser })
  }

  addNewCigar = async (newCigar) => {
    // add new cigar to DB
    const userId = this.props.match.params.userId
    await axios.post(`/api/users/${userId}/cigarLog`, newCigar)
    // refresh data
    await this.getUser()
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }

    const cigarsList = this.state.cigars.map((cigar, i) => {
      return (
        <div key={i}>
          <Link to={`/users/${this.state.user._id}/cigarLog/${cigar._id}`}>
            {cigar.cigarName}
          </Link>
        </div>
      )
    })

    const newUserForm = (
      <form onSubmit={this.handleUpdate}>
        <h1>{this.state.user.userName}</h1>
        <input type='text' name='userName' onChange={this.handleChange} value={this.state.user.userName} />
        <input type='text' name='age' onChange={this.handleChange} value={this.state.user.age} />
        <input type='text' name='location' onChange={this.handleChange} value={this.state.user.location} />
        <input type='submit' value='Update User' />
      </form>
    )

    const userInfo = (
      <div>
        <h1>{this.state.user.userName}</h1>
        <div>{this.state.user.age}</div>
        <div>{this.state.user.location}</div>
      </div>
    )

    return (
      <div>
        Single User
        {this.state.updateUser ? newUserForm : userInfo}

        <button onClick={() => this.toggleUpdateUser()}>Edit User Details</button>

        {cigarsList}

        <NewCigarForm addNewCigar={this.addNewCigar} />

        <button onClick={() => this.handleDelete()}>Delete User</button>
      </div>
    )
  }
}
