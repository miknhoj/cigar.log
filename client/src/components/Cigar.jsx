import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'

export default class Cigar extends Component {
  state = {
    user: {},
    cigar: {},
    updateCigar: false,
    redirect: false
  }

  getCigar = async () => {
    const userId = this.props.match.params.userId
    const cigarId = this.props.match.params.cigarId
    const response = await axios.get(`/api/users/${userId}/cigarLog/${cigarId}`)
    console.log('this is', response)
    this.setState({
      cigar: response.data
    })
  }

  componentDidMount = () => {
    this.getCigar()
  }

  handleChange = (e) => {
    const updatedCigar = { ...this.state.cigar }
    updatedCigar[e.target.name] = e.target.value
    this.setState({ cigar: updatedCigar })
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    const userId = this.props.match.params.userId
    const cigarId = this.props.match.params.cigarId
    const updatedCigar = this.state.cigar
    console.log(updatedCigar)
    await axios.put(`/api/users/${userId}/cigarLog/${cigarId}`, updatedCigar)
  }
  toggleUpdateCigar = () => {
    this.setState({ updateCigar: !this.state.updateCigar })
  }

  handleDelete = async () => {
    const userId = this.props.match.params.userId
    const cigarId = this.props.match.params.cigarId
    await axios.delete(`/api/users/${userId}/cigarLog/${cigarId}`)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      const userId = this.props.match.params.userId
      return <Redirect to={`/users/${userId}`} />
    }
    const cigar = this.state.cigar

    const updateCigarForm = (
      <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 15 }}>
      <form onSubmit={this.handleUpdate}>
      <div>
        <input type='text' name='cigarName' value={this.state.cigar.cigarName} placeholder='Cigar Name' onChange={this.handleChange} />
        <input type='text' name='rating' value={this.state.cigar.rating} placeholder='Rating 1-100' onChange={this.handleChange} />
        <input type='text' name='manufacturer' value={this.state.cigar.manufacturer} placeholder='Manufacturer' onChange={this.handleChange} />
        <input type='text' name='origin' value={this.state.cigar.origin} placeholder='Origin' onChange={this.handleChange} />
        <input type='text' name='body' value={this.state.cigar.body} placeholder='Body' onChange={this.handleChange} />
        <input type='text' name='strength' value={this.state.cigar.strength} placeholder='Strength' onChange={this.handleChange} />
        <input type='text' name='wrapper' value={this.state.cigar.wrapper} placeholder='Wrapper' onChange={this.handleChange} />
        <input type='text' name='binder' value={this.state.cigar.binder} placeholder='Binder' onChange={this.handleChange} />
        <input type='text' name='filler' value={this.state.cigar.filler} placeholder='Filler' onChange={this.handleChange} />
        <input type='text' name='notes' value={this.state.cigar.notes} placeholder='Notes' onChange={this.handleChange} />
        <button className='button' type='submit'> Update Cigar Details </button>
        </div>
      </form>
      </Paper>
    )

    const cigarInfo = (
      <div className="welcome-page">
        <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 15 }}>

          <div>Name: {cigar.cigarName}</div>
          <div>Rating: {cigar.rating}</div>
          <div>Manufacturer: {cigar.manufacturer}</div>
          <div>Origin: {cigar.origin}</div>
          <div>Body: {cigar.body}</div>
          <div>Strength: {cigar.strength}</div>
          <div>Wrapper: {cigar.wrapper}</div>
          <div>Binder: {cigar.binder}</div>
          <div>Filler: {cigar.filler}</div>
          <div>Notes: {cigar.notes}</div>

        </Paper>
      </div>
    )
    const userId = this.props.match.params.userId
    
    return (

      <div>
        {this.state.updateCigar ? updateCigarForm : cigarInfo}
        <Button variant="contained" style={{ backgroundColor: '#118293', margin: 10 }} onClick={() => this.toggleUpdateCigar()}>{this.state.updateCigar ? 'Cancel' : 'Edit Cigar Details'}</Button>
        <Button variant="contained" color="secondary" onClick={() => this.handleDelete()}>Delete Cigar</Button>
        <div><Link to={`/users/${userId}`}> <button className="button">Back</button></Link></div>
      </div>
    )
  }
}
