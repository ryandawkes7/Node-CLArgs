<h1>CL ARGS NOTES APP</h1>

This is a simple personal project for better understanding around the use of Command Line Arguments within NodeJS. The user can create, remove, list and read any specified notes, in which all notes are saved within a .json-formatted file
The project utilises two plugins - **yargs** and **chalk** (the latter just to make it look pretty).

<h1>INSTRUCTIONS FOR USE</h1>
<code>$ node app.js --help</code> - Display all commands available in the terminal<br/>
<code>$ node app.js add --title="" --body=""</code> - Creates a new note. User must enter a title and body for the note in each respective flag<br/>
<code>$ node app.js remove --title=""</code> - Searches for note with matching title and removes it<br/>
<code>$ node app.js list</code> - Displays a list of all existing notes<br/>
<code>$ node app.js read --title=""</code> - Searches for note with matching title and returns it in the terminal<br/>