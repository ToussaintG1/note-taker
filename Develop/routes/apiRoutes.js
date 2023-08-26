const fs = require('fs');
const app = require('express').Router();
const { v4: uuidv4 } = require('uuid');

app.get('/', (req, res) => {
  res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
});


  
  // POST
  app.post('/', (req, res) => {
      // reading contents of the db.json file
      const { 
        title, 
        text, 
        id
        } = req.body;
      
      // If all the required properties are present
      if (title && text) {
        // Variable for the object we will save
        const newNote = {
          title,
          text,
          id: uuidv4()
        };
               
        const stringifyNote = JSON.stringify(newNote)
        // Obtain existing notes
        fs.readFile('./db/db.json', 'utf8', (err, stringifiedNotes) => {
          if (err) {
            console.log("ERR in read file", err);
          }
          console.log("NOTES" , stringifiedNotes);
            // parse string into JSON object
            let parsedNotes = JSON.parse(stringifiedNotes);
            parsedNotes.push(newNote)
            console.log(parsedNotes)
            // Write updated notes back to the file
            fs.writeFile(
              './db/db.json',
              JSON.stringify(parsedNotes),
              (err) =>
              err ? console.error(err) : console.log(`${newNote.title} has been written to file!`));
                 
              res.json(parsedNotes);
            });
        }else{
            res.json("err in writing note")
        } 
    })

module.exports = app