const express = require("express");
const todoController = require("./controllers/todoController");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;
//connecting to database

mongoose.connect("mongodb://root21:root21@ds127604.mlab.com:27604/tododb");


//setting up the server
const app = express();

app.use(bodyParser.urlencoded({extended : false}))

//setting up the middleware
app.use(express.static(__dirname + "/public"))

//setting the view engine
app.set("view engine", 'ejs');



todoController(app);

app.listen(port, err => {
	if (err) {
		console.log(err);
		return;
    }
    console.log(`Sever is up and running on port ${port}`);
});
