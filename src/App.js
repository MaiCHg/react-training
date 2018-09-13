import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Header from "./components/Header";
import EntryList from "./components/EntryList";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row main-title">
        <div className="container">
          <h1>
            Lesson: All or nothing{" "}
            <button className="empty-solid">
              <i className="fas fa-pencil-alt" />
            </button>
          </h1>
        </div>
      </div>

      <div className="container">
        <button className="back col-md-3 col-sm-12">
          <i className="fas fa-arrow-left" /> Back to lessons list
        </button>

        <div className="buttons">
          <button className="main col-md-3 col-sm-12">
            <i className="fas fa-plus-circle" /> Add a new entry
          </button>

          <TextField
            id="search"
            className="col-md-9 col-sm-12"
            label="Search"
            margin="normal"
          />
        </div>

        <EntryList />
      </div>
    </div>
  );
};

export default App;
