require("dotenv").config()
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const passport = require("passport");

//Passport Strategy
require("./config/passport")(passport);

//Connect to Database
mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  })

//Static Resources
app.use(express.static("public"));

//View Engine
app.set("view engine", "ejs");

//Session and Flash
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());
app.use(passport.initialize())
app.use(passport.session());

//Body Parser
app.use(express.urlencoded({extended:false}));

//Routes
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/users.routes");
const MORoutes = require("./routes/mathOlympiad.routes");
const PCRoutes = require("./routes/programmingContest.routes");

app.use(indexRoutes);
app.use("/users", userRoutes);
app.use("/MathOlympiad", MORoutes);
app.use("/programming-contest", PCRoutes);

module.exports = app;