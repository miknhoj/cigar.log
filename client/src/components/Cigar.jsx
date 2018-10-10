import React, { Component } from 'react'
import axios from 'axios';

export default class Cigar extends Component {
  state = {
    cigar: {},
    updateCigar: false
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
    const userId = this.props.match.params.userId
    const cigarId = this.props.match.params.cigarId
    const updatedCigar = this.state.cigar
    await axios.put(`/api/users/${userId}/cigarLog/${cigarId}`, updatedCigar)
  }
  toggleUpdateCigar = () => {
    this.setState({ updateCigar: !this.state.updateCigar })
  }



  render() {
    const cigar = this.state.cigar
    return (
      <div>
        <div>
          {this.state.updateCigar ?
            <form onSubmit={this.handleUpdate}>
              <input type='text' name='cigarName' value={this.state.cigar.cigarName} placeholder='Cigar Name' onChange={this.handleChange} />
              <input type='text' name='rating' value={this.state.cigar.rating} placeholder='Rating' onChange={this.handleChange} />
              <input type='text' name='manufacturer' value={this.state.cigar.manufacturer} placeholder='Manufacturer' onChange={this.handleChange} />
              <input type='text' name='origin' value={this.state.cigar.origin} placeholder='Origin' onChange={this.handleChange} />
              <input type='text' name='body' value={this.state.cigar.body} placeholder='Body' onChange={this.handleChange} />
              <input type='text' name='strength' value={this.state.cigar.strength} placeholder='Strength' onChange={this.handleChange} />
              <input type='text' name='wrapper' value={this.state.cigar.wrapper} placeholder='Wrapper' onChange={this.handleChange} />
              <input type='text' name='binder' value={this.state.cigar.binder} placeholder='Binder' onChange={this.handleChange} />
              <input type='text' name='filler' value={this.state.cigar.filler} placeholder='Filler' onChange={this.handleChange} />
              <input type='text' name='notes' value={this.state.cigar.note} placeholder='Notes' onChange={this.handleChange} />
              <input type='submit' value='Update Cigar Details' />
            </form> :
            <div>
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
            </div>
          }
        </div>
        <button onClick={() => this.toggleUpdateCigar()}>Edit Cigar Details</button>
      </div >
    )
  }
}
