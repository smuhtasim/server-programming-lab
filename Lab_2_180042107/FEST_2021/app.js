const express = require('express');
const app = express();

//Static
app.use(express.static('public'));

//View Engine
app.set("view engine", "ejs");

//Routes
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);

module.exports = app;