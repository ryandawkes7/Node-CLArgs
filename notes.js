const fs = require('fs');
const chalk = require('chalk');
const { array } = require('yargs');

const getNotes = () => {
    return 'Your notes...';
}

// Adding new notes
const addNote = (title, body) => {
    const notes = loadNotes();

    // Check if new note title already exists - stops searching when it finds one duplicate
    const duplicatNote = notes.find((note) => note.title === title);

    if (!duplicatNote) {
        // If no duplicates found, add each note as an object to array
        notes.push({
            title: title,
            body: body
        });

        // Save note to notes array
        saveNotes(notes);

        console.log(chalk.bgGreen('New note added!'));

    } else {
        console.log(chalk.bgRed('A note with this title already exists'));
    }
}

// Save notes
const saveNotes = (notes) => {
    // Stringify JSON data
    const dataJson = JSON.stringify(notes);

    // Write new data to notes.json
    fs.writeFileSync('notes.json', dataJson);
}

// Load in notes
const loadNotes = () => {
    try {
        // Load notes via fs
        const dataBuffer = fs.readFileSync('notes.json');

        // Convert from buffer (binary) to JSON string
        const dataJson = dataBuffer.toString();

        // Return parsed data
        return JSON.parse(dataJson);
    } catch (e ) {
        // If no notes, return empty array
        return [];
    }
}

// Remove note
const removeNote = (title) => {

    // Load notes array
    const notes = loadNotes();

    // Get notes that will remain in the array/don't match title flag note title
    const notesToKeep = notes.filter((note) => note.title !== title);

    // Conditional for printing success/error message - compares array lengths
    if (notesToKeep.length !== notes.length) {
        
        // Save to notes array
        saveNotes(notesToKeep);

        // If array lengths are not equal, print success message
        console.log(chalk.bgGreen('Note successfully removed!'));
        
    } else {
        // Else if they are equal, print error message
        console.log(chalk.bgRed('Could not find note to remove'));
    }
}

// List all notes
const listNotes = () => {
    const notes = loadNotes();

    // Print title
    console.log(chalk.inverse('Your Notes...'));

    // Print each note
    notes.forEach((note) => {
        console.log(note.title);
    });
}

// Read a note
const readNote = (title) => {

    // Load notes in
    const notes = loadNotes();

    // Search for matching note via title
    const noteToRead = notes.find((note) => note.title === title);

    // If note exists, display note title & body
    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title) + "\n" + noteToRead.body);
    } else {
        // Error if note not found
        console.log(chalk.bgRed("Error - no note found"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}