import React from "react";
import Dialog from "@material-ui/core/Dialog";
import style from "../styles/entry.css";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import * as allornothing from "../allornothing.json";

import EditReply from "./EditReply";

class EntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	  open: false,
      list: Object.values(allornothing),
	  selectedEntry: ""
    };

    this.renderReplies = this.renderReplies.bind(this);
	this.handleClickOpen = this.handleClickOpen.bind(this);
	this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  getSelectedEntry(id) {
	  this.setState({ selectedEntry: id });
  }

  renderReplies(entry) {
    if (!entry.replies) {
      return '';
    }

    return entry.replies.map((reply, idx) => {
      return (
          <Link to={entry.routes[idx]} spy={true} smooth={true} duration={500} key={idx}>
			<button className="back" onClick={ () => {this.getSelectedEntry(entry.routes[idx])}}>{reply}</button>
		  </Link>
      );
    });
  }

  getSelectedClass(entry) {
    if (entry.id !== this.state.selectedEntry) {
      return (
		<Element className="entry col-12" name={entry.id} >
          <div className="row">
            <div className="entry-header col-12">
              <div className="entry-id">
                <span>{entry.id}</span>
              </div>
              <p>{entry.text}</p>
            </div>

			<div className="entry-body col-12">
			  {this.renderReplies(entry)}
			</div>

            <div className="entry-manage col-12">
              <div className="row">
				<span className="manage-button" onClick={this.handleClickOpen}>
				  <i className="fas fa-pencil-alt" /> Modify
				</span>

				<span className="manage-button">
				  <i className="fas fa-trash-alt" /> Remove
				</span>
			  </div>
            </div>
          </div>
        </Element>
	  );
    }

    return (
	  <Element className="selected entry col-12" name={entry.id} >
        <div className="row">
          <div className="entry-header col-12">
            <div className="entry-id">
              <span>{entry.id}</span>
            </div>
            <p>{entry.text}</p>
          </div>

		  <div className="entry-body col-12">
			{this.renderReplies(entry)}
		  </div>

          <div className="entry-manage col-12">
            <div className="row">
			  <span className="manage-button" onClick={this.handleClickOpen}>
			    <i className="fas fa-pencil-alt" /> Modify
			  </span>

			  <span className="manage-button">
				<i className="fas fa-trash-alt" /> Remove
			  </span>
			</div>
          </div>
        </div>
      </Element>
	);
  }

  render() {
    return (
      <div className="row" id="entries-list">
        {this.state.list.map(
          function(entry, idx) {
            return (
              <div className="col-md-4 col-sm-12" key={idx}>
                {this.getSelectedClass(entry)}
              </div>
            );
          }.bind(this)
        )}
		<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
		  <EditReply selectedEntry={this.state.selectedEntry} />
		</Dialog>
      </div>
    );
  }
}

export default EntryList;
