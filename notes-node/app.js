// inside the require we just pass one string as argument.
const fs = require('fs');
const os = require('os');
const _ = require('lodash'); 
const yargs = require('yargs');
const notes = require('./notes.js');


// console.log(_.isString(true));
// console.log(_.isString('Tyagi'));
// var filteredArray = _.uniq(['tyagi',1,'tyagi',1,2,3,4]);
// console.log(filteredArray);

/**
 * command() - yargs functionality. We define the command line arguments
 * using this.
 */
const titleOptions = {
    describe: 'Title of note',
    demand: true, // tells if the arg is mandatory
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true, // tells if the arg is mandatory
    alias: 'b'
};
const argv = yargs
    .command('add','Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title: titleOptions
    })
    .command('remove','Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
// console.log('Yargs', argv);
// console.log('Command: ', command);
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    }
    else {
        console.log("Note title taken");
    }
    
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log('Note Found');
        notes.logNote(note);
    }
    else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var result = notes.removeNote(argv.title);
    var message = result ? 'Note was removed' : 'Note was not removed';
    console.log(message);
} else {
    console.log('command not recognized');
}