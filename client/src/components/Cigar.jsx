import React, { Component } from 'react'
import axios from 'axios';

export default class Cigar extends Component {
  state = {
    cigar: {}
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

  render() {
    const cigar = this.state.cigar
    return (
      <div>
        CIGAR
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
    )
  }
}
