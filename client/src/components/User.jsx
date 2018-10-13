import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import NewCigarForm from './NewCigarForm';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class User extends Component {
  state = {
    user: {},
    cigars: [],
    updateUser: false,
    redirect: false,
    sort: false
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
    e.preventDefault()
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
        <div className='margins' key={i}>
          <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 'auto', maxWidth: '500px' }}>
            <Link to={`/users/${this.state.user._id}/cigarLog/${cigar._id}`}>
              <div>
                {cigar.cigarName}
                <div> Rating: {cigar.rating} </div>
              </div>
            </Link>
          </Paper>
        </div>
      )
    })

    const updateForm = (
      <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 'auto', maxWidth: '500px' }} >
        <form onSubmit={this.handleUpdate}>
          <div><input type='text' name='userName' onChange={this.handleChange} value={this.state.user.userName} placeholder='Name' />
            <input type='text' name='age' onChange={this.handleChange} value={this.state.user.age} placeholder='Age' />
            <input type='text' name='location' onChange={this.handleChange} value={this.state.user.location} placeholder='Location' />
            <input type='text' name='image' onChange={this.handleChange} value= {this.state.user.image} placeholder='Image Url' />
            <div><Button variant="contained" style={{ backgroundColor: '#118293', margin: 10 }} type='submit'>Update User</Button></div>
          </div>
        </form>
      </Paper>
    )

    const userInfo = (
      <div>
        <img className="profile" src={this.state.user.image} alt='user'/>
        <div className="sub">{this.state.user.age}</div>
        <div className="sub">{this.state.user.location}</div>
        <Button variant="contained" color="secondary" style={{ margin: 10 }} onClick={() => this.handleDelete()}>Delete User</Button>
      </div>
    )

    return (
      <div>
        <div className="header">
          {this.state.user.userName}
        </div>

        {this.state.updateUser ? updateForm : userInfo}

        <Button variant="contained" style={{ backgroundColor: '#118293', margin: 10, }} onClick={() => this.toggleUpdateUser()}>{this.state.updateUser ? 'Back' : 'Edit User Details'}</Button>
        {/* <button onClick={() => this.toggleSort()}>{this.state.sort ? 'Sort by Name' : 'Sort by Rating'}</button> */}
        {cigarsList}

        <NewCigarForm addNewCigar={this.addNewCigar} />

        <Link to="/home"> <button className="button">Back</button></Link>
      </div>
    )
  }
}
