const MathOlympiad = require("../models/MathOlympiad.model");

const getMO = (req,res) => {
    res.render("math-olympiad/register.ejs", {error: req.flash("error")});
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

    MathOlympiad.findOne({ name: name, contact: contact }).then((participant) => {
        if (participant) {
          error = "Participant with this name and contact no. already exists!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/register");
        } else {
          const participant = new MathOlympiad({
            name,
            category,
            contact,
            email,
            institution,
            paid,
            total,
            selected,
            tshirt,
          });
          participant
            .save()
            .then(() => {
              error = "Participant has been registered successfully!";
              req.flash("error", error);
              res.redirect("/MathOlympiad/register");
            })
            .catch(() => {
              error = "An unexpected error occured!";
              req.flash("error", error);
              res.redirect("/MathOlympiad/register");
            });
        }
      });
}

const getMOList = (req, res) => {
    let all_participant = [];
    let error = "";
    MathOlympiad.find()
      .then((data) => {
        all_participant = data;
        res.render("math-olympiad/list.ejs", {
          error: req.flash("error"),
          participants: all_participant,
        });
      })
      .catch(() => {
        error = "Failed to fetch data!";
        res.render("math-olympiad/list.ejs", {
          error: req.flash("error", error),
          participants: all_participant,
        });
      });
  };

const deleteMO = (req, res) => {
  const id = req.params.id;
  let error = "";

  MathOlympiad.deleteOne({ _id: req.params.id })
    .then(() => {
      error = "Data has been deleted successfully!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    })
    .catch(() => {
      error = "Failed to delete data!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};

const paymentDoneMO = (req, res) => {
    const id = req.params.id;
    let error = "";
  
    MathOlympiad.findOne({ _id: id })
      .then((participant) => {
        const total = participant.total;
        MathOlympiad.findByIdAndUpdate({ _id: id }, { paid: total }, (err) => {
          if (err) {
            error = "Data could not be updated!";
            req.flash("error", error);
            res.redirect("/MathOlympiad/list");
          } else {
            error = "Payment completed successfully!";
            req.flash("error", error);
            res.redirect("/MathOlympiad/list");
          }
        });
      })
      .catch(() => {
        error = "Data could not be updated!";
        req.flash("error", error);
        res.redirect("/MathOlympiad/list");
      });
  };

module.exports = {getMO, postMO, getMOList, deleteMO,paymentDoneMO};