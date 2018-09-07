import React from 'react';
import axios from 'axios';
import style from "../styles/entry.css";

import * as allornothing from '../allornothing.json';

class EntryList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: Object.values(allornothing)
    }

	this.renderReplies = this.renderReplies.bind(this)
  }

  renderReplies(replies) {
    return replies.map(reply => {
        return (
            <div class="entry-body col-12">
				<button class="back">{ reply }</button>
			</div>
        )
    })
  }
  
  render() {
    return (
      <div class="row" id="entries-list">
		{this.state.list.map(entry => {
          return (
			<div class="col-md-4 col-sm-12">
			  <div class="entry col-12">
				<div class="row">
				  <div class="entry-header col-12">
					<div class="entry-id">
					  <span>{entry.id}</span>
					</div>
					<p>{entry.text}</p>
				  </div>

				  { this.renderReplies(entry.replies) }

				  <div class="entry-manage col-12">
					<div class="row">

					  <span class="manage-button">
						<i class="fas fa-comments"></i> Add new answer
					  </span>

					  <span class="manage-button">
						<i class="fas fa-pencil-alt"></i> Modify
					  </span>
					</div>
				  </div>
				</div>
			  </div>
			</div>
          )
        })}
	  </div>
    )
  }
}

export default EntryList
