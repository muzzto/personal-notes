import React, { useState } from 'react';
import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(), 
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const onDeleteNoteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onArchiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const onSearchChangeHandler = (query) => {
    setSearchQuery(query);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="note-app">
      <NoteHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChangeHandler}
      />
      <NoteBody
        onAddNote={onAddNoteHandler}
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        onDelete={onDeleteNoteHandler}
        onArchive={onArchiveNoteHandler}
      />
    </div>
  );
}

export default NoteApp;