import React, { Component } from "react";
import v4 from 'uuid/dist/v4';
import "./App.css";
import NoteList from "./Notes/NoteList";
import NoteEditor from "./NoteEditor";

class App extends Component {
  state = {
    notes: [
      { id: 1, text: "Adam" },
      { id: 2, text: "Adam" },
    ],
  };

  handleAddNote = (text) => {
    this.setState((prevState) => ({
      notes: [{ id: v4(), text }, ...prevState.notes],
    }));
    console.log(this.state)
  };

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <h1>Forms in js</h1>
        <NoteEditor onSubmit={this.handleAddNote}/>
        <NoteList notes={notes} />
      </div>
    );
  }
}

export default App;
