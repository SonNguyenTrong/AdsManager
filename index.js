const hbs = require('hbs');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const errorHandler = require('./middleware/error');
const bodyParser = require('body-parser');
const data = require('./src/data_handler')
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;

dotenv.config({path: "./.env"});
const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');


app.use(errorHandler);

// set security headers
app.use(helmet());

// prevent xss attacks
app.use(xss());

//Mount Route
const dashboards = require('./routes/dashboard')
app.use('/',dashboards)

const server = app.listen(port, ()=>{
  console.log('Server is running at port '+port)
});

// Handle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: ' +err.message);

  // Close server and exit
  server.close(() => process.exit(1));
});


