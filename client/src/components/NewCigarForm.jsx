import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

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
    this.setState({ createCigar: !this.state.createCigar})
  }

  render() {

    return (
      <div>
        {this.state.createCigar ?
          <Paper style={{ padding: 10, backgroundColor: '#FCCF5D', margin: 'auto', maxWidth: '500px' }}>
            <form onSubmit={this.handleNew}>
            <div>
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
              </div>
            </form>
          </Paper> :
          null
        }

        <Button variant="contained" style={{ backgroundColor: '#118293', color: '#F9A05C', margin: 10 }} onClick={() => this.toggleCreateCigar()}>{this.state.createCigar ? 'Cancel' : 'Add New Cigar'} </Button>
      </div>
    )
  }
}
