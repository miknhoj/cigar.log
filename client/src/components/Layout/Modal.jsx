import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import NewCigarForm from '../NewCigarForm';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
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
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    const newCigar = { ...this.state.newCigar }
    newCigar[e.target.name] = e.target.value
    this.setState({ newCigar })
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
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>+</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
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
            <Button variant="contained" style={{ backgroundColor: '#118293', margin: 10 }} input type='submit'>Add New Cigar</Button>
          </form> 
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;