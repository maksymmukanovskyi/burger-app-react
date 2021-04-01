import React, { Component } from "react";
class NoteEditor extends Component {
  state = {
    text: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
        />
        <button>Add note</button>
      </form>
    );
  }
}
export default NoteEditor;
