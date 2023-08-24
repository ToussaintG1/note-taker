const path = require('path');
const router = require('express').Router();


app.get('/notes', (req, res) => {
    // reading contents of the db.json file
    // use fs to read the content of db.json
    res.json(JSON.parse(fs.readFileSync("../db/db.json", "utf8")))
    res.send();
  })
  
  // POST
  app.post('/notes', (req, res) => {
      // reading contents of the db.json file
      const { 
        title, 
        text, 
        } = req.body;
      
      // If all the required properties are present
      if (title && text) {
        // Variable for the object we will save
        const newNote = {
          title,
          text,
        };
               
        const stringifyNote = JSON.stringify(newNote)
        // Obtain existing notes
        fs.readFile('../db/db.json', 'utf8', (err, stringifyNote) => {
          if (err) {
            console.error("ERR in read file", err);
          }
          console.log("NOTES" , stringifyNote);
            // parse string into JSON object
            let parsedNotes = JSON.parse(stringifyNote);
            parsedNotes.push(newNote)
            console.log(parsedNotes)
            // Write updated notes back to the file
            fs.writeFile(
              '../db/db.json',
              JSON.stringify(parsedNotes),
              (err) =>
              err ? console.error(err) : console.log(`${newNote.title} has been written to file!`));
                  res.json(parsedNotes);
                });
        }else{
            res.json("err in writing note")
        } 
      // add new 
  fs.writeFile('data.json', JSON.stringify( ))
      // write new content of file
  // "If" statement i
  if(err) throw err;
  console.log()
      // Send message of "success" if it saves 
    
      res.status(200);
    })









module.exports = router