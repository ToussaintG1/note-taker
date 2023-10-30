const path = require('path');
const router = require('express').Router();

// notes html route
router.get('/notes', (req, res) => {
  console.log("Sending file 'notes.html' ")
  res.sendFile(path.join(__dirname, '../public/notes.html'));
})
// home route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Wild card route 
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})


module.exports = router;