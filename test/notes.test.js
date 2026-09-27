import assert from "node:assert/strict";
import { test } from "node:test";
import { addNote, listNotes, removeNote } from "../src/notes.js";

test("adds, lists and removes a note", () => {
  const note = addNote("buy milk");
  assert.equal(listNotes().length, 1);
  assert.equal(removeNote(note.id), true);
  assert.equal(listNotes().length, 0);
});
