const MathOlympiad = require("../models/MathOlympiad.model");

const getMO = (req,res) => {
    res.render("math-olympiad/register.ejs");
}

const postMO = (req,res) => {
    const {name,email,contact,category,tshirt,institution} = req.body;
    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(category);
    console.log(tshirt);
    console.log(institution);
    res.render("math-olympiad/register.ejs");
}

const getMOList = (req,res) => {
    res.render("math-olympiad/list.ejs");
}

const deleteMO = (req,res) => {
    const id = req.params.id;
    console.log(id);
    res.render("math-olympiad/list.ejs");
}

module.exports = {getMO, postMO, getMOList, deleteMO};