import React from "react";

function NoteApp({ note }) {
  const { id, title, body, completed } = note;

  return (
    <div
      data-testid={`note-${id}`}
      className={completed ? "completed" : "not-completed"}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default NoteApp;
