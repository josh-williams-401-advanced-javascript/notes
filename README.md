# Notes
Week One Lab

8/10/2020

Set up Notes with the following commands:
```
git clone https://github.com/josh-williams-401-advanced-javascript/notes.git

cd notes

npm i
```

Run the app by entering this in terminal: `node index.js -a "This is my note"` 
 
This should produce `Adding Note: This is my note`

This app allows you to enter a note into a command line by typing with `-a` or `--add`, and it will console.log the note you enter after that, which should be surrounded by quotes. It will not log anything with other commands, and it will not log anything if no note is written. The assignment says to run the program with `node notes.js` but that does not work with the file structure provided. It would work if `index.js` were renamed as `notes.js`.

8/11/2020

App is now organized with classes and has tests to chack that the functions work as expected.  
Run the tests with `npm test`.  
Sources: https://jestjs.io/docs/en/jest-object to learn to implement `spy` with notes.js tests.  

