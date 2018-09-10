import React from "react";
import axios from "axios";
import style from "../styles/entry.css";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import * as allornothing from "../allornothing.json";

class EntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: Object.values(allornothing)
    };

    this.renderReplies = this.renderReplies.bind(this);
  }

  renderReplies(entry) {
    if (!entry.replies) {
      return '';
    }

    return entry.replies.map((reply, idx) => {
      return (
          <Link to={entry.routes[idx]} spy={true} smooth={true} duration={500} key={idx}>
			<button className="back">{reply}</button>
		  </Link>
      );
    });
  }

  render() {
    return (
      <div className="row" id="entries-list">
        {this.state.list.map(
          function(entry, idx) {
            return (
              <div className="col-md-4 col-sm-12" key={idx}>
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
                        <span className="manage-button">
                          <i className="fas fa-comments" /> Add new answer
                        </span>

                        <span className="manage-button">
                          <i className="fas fa-pencil-alt" /> Modify
                        </span>
                      </div>
                    </div>
                  </div>
                </Element>
              </div>
            );
          }.bind(this)
        )}
      </div>
    );
  }
}

export default EntryList;
