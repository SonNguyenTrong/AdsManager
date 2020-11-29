const hbs = require('hbs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./src/data_handler')
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;

dotenv.config({path: "./.env"});
const app = express();
//set dynamic views file
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(express.static('public'));


app.get('/',(req, res) => {
    data.data_insights()
    .then((infor) =>{
        res.render('Dashboard',{
            title: 'Dashboard',
            infor: infor
        });
    }).catch(err => console.log(err));
});


app.listen(port);


