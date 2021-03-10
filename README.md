<h1>CL ARGS NOTES APP</h1>

This is a simple personal project for better understanding around the use of Command Line Arguments within NodeJS. The user can create, remove, list and read any specified notes, in which all notes are saved within a .json-formatted file
The project utilises two plugins - **yargs** and **chalk** (the latter just to make it look pretty).

<h1>INSTRUCTIONS FOR USE</h1>
`$ node app.js --help` - Display all commands available in the terminal
`$ node app.js add --title="" --body=""` - Creates a new note. User must enter a title and body for the note in each respective flag
`$ node app.js remove --title=""` - Searches for note with matching title and removes it
`$ node app.js list` - Displays a list of all existing notes
`$ node app.js read --title=""` - Searches for note with matching title and returns it in the terminal