import React from "react";
const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );
};
export default NoteList;
