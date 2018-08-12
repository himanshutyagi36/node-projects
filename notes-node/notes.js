
const fs = require('fs');

var fetchNotes = () =>{
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    // If there is a note with same title, we store that in the duplicateNotes
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;       
    }
};

var getAll = () => {
    return fetchNotes();
};
var getNote = (title) => {
    var notes = fetchNotes();
    var tempNotes = notes.filter((note) => note.title === title);
    return tempNotes[0];
};
var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    // var tempNotes = [];
    // notes.forEach(function(note){
    //     if (note.title != title) {
    //         tempNotes.push(note);
    //     }
    // });
    var tempNotes = notes.filter((note) => note.title !== title);
    saveNotes(tempNotes);
    if (notes.length === tempNotes.length) {
        return false;
    }
    else {
        return true;
    }
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    // property/object : value
    // addNote: addNote
    // in ES6
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
