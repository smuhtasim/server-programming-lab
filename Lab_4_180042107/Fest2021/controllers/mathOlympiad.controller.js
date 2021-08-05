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

    let registrationFee = 0;
    if(category=="School")
    {
        registrationFee = 250;
    }else if(category=="College")
    {
        registrationFee = 400;
    }
    else{
        registrationFee = 500;
    }

    const total = registrationFee;
    const paid = 0;
    const selected = false;

    MathOlympiad.findOne({name:name,contact:contact,}).then((participant)=>{
        if(participant) {
            error = "Participant with same name and contact info already exists!";
            console.log(error);
            res.redirect("MathOlympiad/register");
        }else{
            const participant = new MathOlympiad({name,category, contact, tshirt, email, institution, paid, total, selected})
        }
        participant.save().then(() => {error = "Participant has been registered succesfully";
                                       console.log(error);
                                       res.redirect("MathOlympiad/Register");
                    }).catch(()=>   {error = "An unexpected error occured while registering";
                                    console.log(error);
                                    res.redirect("MathOlympiad/Register");});
    })
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