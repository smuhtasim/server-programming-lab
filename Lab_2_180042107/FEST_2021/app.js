const express = require('express');
const app = express();

//Static
app.use(express.static('public'));

//View Engine
app.set("view engine", "ejs");

//Routes
const userRoutes = require("./routes/users.routes");
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);
app.use("/users", userRoutes);

app.use(express.urlencoded({ extended : false }))

module.exports = app;