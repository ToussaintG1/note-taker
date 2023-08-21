const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// env.PORT || 3001
const port = 3001;

// tell the app to send the contents of the public folder 
app.use(express.static(path.join(__dirname, '../public'))); 




app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  })

  
 app.get('/api/notes', (req, res) => {
  // reading contents of the db.json file

  // use fs to read the content of db.json


  res.send();
})

// POST
app.post('/api/notes', (req, res) => {
    // reading contents of the db.json file
  
    // add new 

    // write new content of file
// "If" statement i
    // Send message of "success" if it saves o
  
    res.status(200);
  })



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



// const getNotes = () =>
//   fetch('/api/notes', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });