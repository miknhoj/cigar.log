import React, { Component } from 'react'

export default class NewCigarForm extends Component {
render() {
    return (
    <div>
        <form onSubmit={this.handleNew}>
        <input type='text' name='userName' placeholder='Cigar Name' onChange={this.handleChange} />
        <input type='text' name='rating'  placeholder='Rating' onChange={this.handleChange} />
        <input type='text' name='manufacturer'  placeholder='Manufacturer' onChange={this.handleChange} />
        <input type='text' name='origin'  placeholder='Origin' onChange={this.handleChange} />
        <input type='text' name='body'  placeholder='Body' onChange={this.handleChange} />
        <input type='text' name='strength'  placeholder='Strength' onChange={this.handleChange} />
        <input type='text' name='wrapper'  placeholder='Wrapper' onChange={this.handleChange} />
        <input type='text' name='binder'  placeholder='Binder' onChange={this.handleChange} />
        <input type='text' name='filler'  placeholder='Filler' onChange={this.handleChange} />
        <input type='text' name='notes'  placeholder='Notes' onChange={this.handleChange} />
        <input type='submit' value='Add New Cigar' />
        </form>
    </div>
        )
    }
}
