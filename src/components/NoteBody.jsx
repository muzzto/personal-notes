import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ onAddNote, activeNotes, archivedNotes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      
      <h2>Catatan Aktif</h2>
      {/* Kriteria 3: Conditional rendering jika tidak ada catatan */}
      {activeNotes.length > 0 ? (
        <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
      
      <h2>Arsip</h2>
      {/* Kriteria Opsional 3: Daftar terpisah untuk arsip */}
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteBody;