const notes = new Map();
let nextId = 1;

export function listNotes() {
  return [...notes.values()];
}

export function addNote(text) {
  const note = { id: nextId++, text, createdAt: new Date().toISOString() };
  notes.set(note.id, note);
  return note;
}

export function removeNote(id) {
  return notes.delete(id);
}
