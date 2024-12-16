const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contentRoutes = require('./routes/contentRoutes');
const fieldRoutes = require('./routes/fieldRoutes');
const contentFieldRoutes = require('./routes/contentFieldRoutes');

app.use(bodyParser.json());
app.use('/content', contentRoutes);
app.use('/field', fieldRoutes);
app.use('/content-field', contentFieldRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
