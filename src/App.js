import React, { Component } from "react";
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
      notes: [{ id: Date.now(), text }, ...prevState.notes],
    }));
  };

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <h1>Forms in js</h1>
        <NoteEditor />
        <NoteList notes={notes} />
      </div>
    );
  }
}

export default App;
