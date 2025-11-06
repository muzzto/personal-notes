import React from 'react';
import { showFormattedDate } from '../utils/index';
import NoteItemActions from './NoteItemActions';

function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <NoteItemActions
        id={note.id}
        archived={note.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;