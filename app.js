const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const router        = require('./routes');
const nunjucks      = require('nunjucks');

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Nunjucks setup
nunjucks.configure('views', {
  express: app,
  watch: true
});

app.set('view engine', 'njk');


app.use('/', router);

const port = 3030;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});





