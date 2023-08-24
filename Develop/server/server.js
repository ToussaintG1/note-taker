const express = require('express');
const fs = require('fs');
const data = require('../db/db.json');
const app = express();
const htmlRoutes = require('../routes/htmlRoutes');
const apiRoutes = require('../routes/apiRoutes');

// env.PORT || 3001
const port = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// tell the app to send the contents of the public folder 
app.use(express.static(path.join(__dirname, '../public'))); 



  
 



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


