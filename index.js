const ejs = require('ejs');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const errorHandler = require('./middleware/error');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const crypto = require('crypto');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;

dotenv.config({path: "./.env"});
const app = express();

// Body parser
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Cookie parser
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);

// set security headers
app.use(helmet());

// prevent xss attacks
app.use(xss());

//Parse post request

//Mount Route
const dashboards = require('./routes/dashboard')
const shops = require('./routes/shop')
const shopify = require('./routes/shopify')
app.use('/dashboard/',dashboards)
app.use('/shop/',shops)
app.use('/shopify/',shopify)

const server = app.listen(port, ()=>{
  console.log('Server is running at port '+port)
});

// Handle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: ' +err.message);

  // Close server and exit
  server.close(() => process.exit(1));
});


