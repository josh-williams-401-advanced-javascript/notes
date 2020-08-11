# Notes
Week One Lab

8/10/2020

Set up Notes with the following commands:
```
git clone https://github.com/josh-williams-401-advanced-javascript/notes.git

cd notes

npm i
```

Test by entering this in terminal: `node index.js -a "This is my note"` 
 
This should produce `Adding Note: This is my note`

This app allows you to enter a note into a command line by typing with `-a` or `--add`, and it will console.log the note you enter after that. It will not work with other commands, and it will not work if no note is written. The assignment says to run the program with `node notes.js` but that does not work with the file structure provided. It would work if `index.js` were renamed as `notes.js`.
