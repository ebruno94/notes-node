const fs = require('fs');

var fetchNotes = () => {
  // try/catch IFF notes-data.json does not exist
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var displayNote = (note) => {
  console.log('--------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log('--------------');
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  // CHECK FOR DUPLICATES
  // if true: note is kept in the array, else not.
  // same as   var duplicateNotes = notes.filter((note) => {
  //   return note.title === title
  // });
  var duplicateNotes = notes.filter((note) => note.title === title );

  if (duplicateNotes.length === 0){
    notes.push(note);
    // Put stringified version of notes in notes-data.json;
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  // Filter notes by saving all the notes that have the same title.
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  // Fetch notes
  var notes = fetchNotes();
  // Filter note by saving all the notes that do not have the provided title.
  var filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  // check lengths of notes and filteredNote, return inequality === true
  return notes.length !== filteredNotes.length
};

module.exports = {
  // If you have a property whose name is identical to the value, omit : and value
  // addNote: addNote [They're the same!]
  addNote,
  getAll,
  getNote,
  removeNote,
  displayNote
};
