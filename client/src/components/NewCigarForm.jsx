import React, { Component } from 'react'

export default class NewCigarForm extends Component {
  state = {
    newCigar: {
      cigarName: '',
      rating: '',
      manufactuer: '',
      origin: '',
      strength: '',
      wrapper: '',
      binder: '',
      filler: '',
      notes: ''
    },
    createCigar: false
  }

  handleChange = (e) => {
    const newCigar = { ...this.state.newCigar }
    newCigar[e.target.name] = e.target.value
    this.setState({ newCigar })
  }

  toggleCreateCigar = () => {
    this.setState({ createCigar: !this.state.createCigar })
  }

  handleNew = (e) => {
    // prevent form from sending GET request
    e.preventDefault()
    // get new cigar out of state
    const newCigar = { ...this.state.newCigar }
    // this.props.addNewCigar(newCigar)
    this.props.addNewCigar(newCigar)
    // toggle form off
  }

  render() {

    return (
      <div>
        {this.state.createCigar ?
          <form onSubmit={this.handleNew}>
            <input type='text' name='cigarName' value={this.state.newCigar.cigarName} placeholder='Cigar Name' onChange={this.handleChange} />
            <input type='text' name='rating' placeholder='Rating' onChange={this.handleChange} />
            <input type='text' name='manufacturer' placeholder='Manufacturer' onChange={this.handleChange} />
            <input type='text' name='origin' placeholder='Origin' onChange={this.handleChange} />
            <input type='text' name='body' placeholder='Body' onChange={this.handleChange} />
            <input type='text' name='strength' placeholder='Strength' onChange={this.handleChange} />
            <input type='text' name='wrapper' placeholder='Wrapper' onChange={this.handleChange} />
            <input type='text' name='binder' placeholder='Binder' onChange={this.handleChange} />
            <input type='text' name='filler' placeholder='Filler' onChange={this.handleChange} />
            <input type='text' name='notes' placeholder='Notes' onChange={this.handleChange} />
            <input type='submit' value='Add New Cigar' />
          </form> :
        null
        }

        <button onClick={() => this.toggleCreateCigar()}>{this.state.createCigar? 'Cancel' : 'Add New Cigar'} </button>
      </div>
    )
  }
}
