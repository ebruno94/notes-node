console.log('Starting notes.js...');

const fs = require('fs');

var fetchNotes = () => {

}

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  // try/catch IFF notes-data.json does not exist
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  // CHECK FOR DUPLICATES
  // if true: note is kept in the array, else not.
  // same as   var duplicateNotes = notes.filter((note) => {
  //   return note.title === title
  // });
  var duplicateNotes = notes.filter((note) => note.title === title );

  if (duplicateNotes.length === 0){
    notes.push(note);
    // Put stringified version of notes in notes-data.json;
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note: ', title);
};

var removeNote = (title) => {
  console.log('Removing note: ', title);
};

module.exports = {
  // If you have a property whose name is identical to the value, omit : and value
  // addNote: addNote [They're the same!]
  addNote,
  getAll,
  getNote,
  removeNote
};
