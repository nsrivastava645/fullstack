const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const db = require('./config/mongoose');
//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));







const port = process.env.PORT || 3001 ;

app.use('/', require('./routes'));



app.listen(port)