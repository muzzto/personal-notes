import React, { useState } from 'react';

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleCharLimit = 50;

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= titleCharLimit) {
      setTitle(event.target.value);
    }
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddNote({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={onSubmitHandler}>
        {/* Kriteria Opsional 2: Menampilkan sisa karakter */}
        <p className="note-input__title__char-limit">
          Sisa karakter: {titleCharLimit - title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          onChange={onTitleChangeHandler}
          required
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          value={body}
          onChange={onBodyChangeHandler}
          required
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteInput;