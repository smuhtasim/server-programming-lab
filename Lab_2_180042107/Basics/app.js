const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
const {logger,printSomething} = require("./middlewares/app.middlewares")
const morgan = require("morgan");

//app.use([logger,printSomething]);
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(userRoutes);
app.get("/", (req,res) =>{
    res.sendFile("home.html", {root:"./views"});
    //res.status(200).send("<H1>HOme Page--get request<H1>")
})

app.post("/",(req,res)=>{
    res.status(201).send("<H1>Home page--post<H1>")
})

app.get("/about", (req,res) =>{
    res.append("id","154407")
    res.send("<H1>About Page<H1>")
})

app.get("/contact",(req,res)=>{
    res.json({name:"john reese",profession:"NBA"});
    res.send("<H1>Contact Page<H1>")
})

app.use((req,res)=>{
    res.status(401).send("<h3>Error! Page doesn't exist<h3>")
})
module.exports = app;