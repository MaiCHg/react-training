import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import style from "../styles/reply.css";

Modal.setAppElement('#app')

class EditReply extends React.Component {
  constructor (props) {
    super(props);

	/* TODO - Replace data using Redux */
	this.state = {
      age: '',
      name: 'hai',
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    return (
	  <div>
	  <DialogTitle id="alert-dialog-title">
		<div className="modal-entry-id">
		  <span>{this.props.selectedEntry}</span>
		</div>
	  </DialogTitle>

	  <DialogContent>
		
		<TextField
		  id="entry-text"
		  className="col-12"
		  label="Entry"
		  margin="normal"
		/>
		
		<h3>Replies</h3>

		<div className="col-12 reply">
		  <div className="row">
			<TextField
			  id="reply"
			  className="col-12"
			  label="Reply"
			  margin="normal"
			/>

			<InputLabel htmlFor="next-entry">Next Entry</InputLabel>
			<Select
			  className="col-12"
			  value={this.state.age}
			  inputProps={{
				name: 'next',
				id: 'next-entry',
			  }}
			>
			  <MenuItem value={10}>Ten</MenuItem>
			  <MenuItem value={20}>Twenty</MenuItem>
			  <MenuItem value={30}>Thirty</MenuItem>
			</Select>

			<InputLabel htmlFor="type">Type of reply</InputLabel>
			<Select
			  className="col-12"
			  value={this.state.age}
			  inputProps={{
				name: 'type',
				id: 'type',
			  }}
			>
			  <MenuItem value={10}>Ten</MenuItem>
			  <MenuItem value={20}>Twenty</MenuItem>
			  <MenuItem value={30}>Thirty</MenuItem>
			</Select>

			<span className="delete-link col-12">Delete this answer</span>
		  </div>
		</div>
		
	  </DialogContent>

	  <DialogActions>
		<div className="finale-button">
				<button className="main finale-button">Save</button>
				<button className="empty-solid finale-button">Delete</button>
		</div>
	  </DialogActions>
	  </div>
    );
  }
}

export default EditReply;