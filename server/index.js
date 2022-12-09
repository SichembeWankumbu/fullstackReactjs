const path =require ('path');
const express = require ('express');
const bodyParser = require('body-parser');
const database = require('./database');
const ENV = process.env.Node_ENV;
const PORT = 5000;

var db = require('./database');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false})) ;
app.use(bodyParser.json());

app.listen(PORT, ()=>
{
    console.log(`server listening on port ${PORT}.....`)
});

db.query('SELECT NULL()',(err,res)=>
{
    if(err,error)
        return console.log(err,error);
    return console.log(`PostgreSQL connected: ${res[0].now}.`);    
});

module.exports=app;