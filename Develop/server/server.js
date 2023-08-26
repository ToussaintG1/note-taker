const express = require('express');
const app = express();
const htmlRoutes = require('../routes/htmlRoutes');
const apiRoutes = require('../routes/apiRoutes');

// env.PORT || 3001
const port = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// tell the app to send the contents of the public folder 
app.use(express.static('public'));
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);





app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})