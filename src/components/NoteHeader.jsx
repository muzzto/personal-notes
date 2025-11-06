import React from 'react';
import NoteSearch from './NoteSearch';

function NoteHeader({ searchQuery, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch value={searchQuery} onChange={onSearchChange} />
    </div>
  );
}

export default NoteHeader;