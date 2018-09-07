import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Header from './components/Header';
import EntryList from './components/EntryList';

const App = () => {
  return (
	<div class='container-fluid'>
		<Header />
		<div class="row main-title">
			<div class="container">
			  <h1>Lesson: All or nothing <button class="empty-solid"><i class="fas fa-pencil-alt"></i></button></h1>
			</div>
		</div>

		<div class="container">
		  <button class="back col-md-3 col-sm-12">
			<i class="fas fa-arrow-left"></i> Back to lessons list
		  </button>

		  <div class="buttons">
			<button class="main col-md-3 col-sm-12">
			  <i class="fas fa-plus-circle"></i> Add a new entry
			</button>

			<TextField
			  id="search"
			  className='col-md-9 col-sm-12'
			  label="Search"
			  margin="normal"
			/>
		  </div>

		  <EntryList />
		</div>
	</div>
  );
};

export default hot(module)(App)

ReactDOM.render(<App />, document.getElementById("app"));
