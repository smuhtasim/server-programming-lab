const ProgContest = require("../models/ProgrammingContest.model");
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const transporter = nodemailer.createTransport({
  service : "hotmail",
  auth: {
    user:"matholympiad.iut@outlook.com",
    pass:"srijon007"
  }
});
const getPC = (req, res) => {
  res.render("programming-contest/registerTeam.ejs", { error: req.flash("error") });
};


const postPC = (req, res) => {
  const {
    teamName,
    institute,
    coachName,
    coachContact,
    coachEmail,
    coachTshirt,
    TLName,
    TLContact,
    TLEmail,
    TLtshirt,
    TM1Name,
    TM1Contact,
    TM1Email,
    TM1tshirt,
    TM2Name,
    TM2Contact,
    TM2Email,
    TM2tshirt,
  } = req.body;

  const total = 1000;
  const paid = 0;
  const selected = false;
  let error = "";
  var key = crypto.randomBytes(16).toString("hex");

  ProgContest.findOne({ teamName: teamName, institute: institute }).then(
    (team) => {
      if (team) {
        error = "Team with this name and institution already exists!";
        req.flash("error", error);
        res.redirect("/programming-contest/register");
      } else {
        const participant = new ProgContest({
          teamName,
          institute,
          coachName,
          coachContact,
          coachEmail,
          coachTshirt,
          TLName,
          TLContact,
          TLEmail,
          TLtshirt,
          TM1Name,
          TM1Contact,
          TM1Email,
          TM1tshirt,
          TM2Name,
          TM2Contact,
          TM2Email,
          TM2tshirt,
          total,
          paid,
          selected,
          key
        });
        participant
          .save()
          .then(() => {
            error = "The team has been registered successfully!!";
            const emails = [coachEmail,TLEmail, TM1Email, TM2Email];
            const options = {
              from: "matholympiad.iut@outlook.com",
              to: emails,
              subject: "Congratulations on getting selected in MathOlympiad, IUT",
              text: "Your team has been selected. This is your unique ID "+key+"."
            }
            
            transporter.sendMail(options, function(err,info){
              if(err){
                console.log(err);
                return;
              }
              console.log("sent"+info.response)
            })

            req.flash("error", error);
            res.redirect("/programming-contest/register");
          })
          .catch(() => {
            error = "An unexpected error occured!";
            console.log("error ", error);
            req.flash("error", error);
            res.redirect("/programming-contest/register");
          });
      }
    }
  );
};

const getPCList = (req, res) => {
  let all_participant = [];
  let error = "";
  ProgContest.find()
    .then((data) => {
      all_participant = data;
      res.render("programming-contest/teamList.ejs", {
        error: req.flash("error"),
        participants: all_participant,
      });
    })
    .catch(() => {
      error = "Failed to fetch data";
      res.render("programming-contest/teamList.ejs", {
        error: req.flash("error", error),
        participants: all_participant,
      });
    });
};
const deletePC = (req, res) => {
  const id = req.params.id;
  console.log("id ", id);

  let error = "";
  ProgContest.deleteOne({ _id: req.params.id })
    .then(() => {
      error = "";
      req.flash("error", error);
      res.redirect("/programming-contest/list");
    })
    .catch(() => {
      error = "Failed to delete data!";
      req.flash("error", error);
      res.redirect("/programming-contest/list");
    });
};

const paymentDonePC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.paid = participant.total;
      participant
        .save()
        .then(() => {
          let error = "Payment completed succesfully!";
          req.flash("error", error);
          res.redirect("/programming-contest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/programming-contest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/programming-contest/list");
    });
};

const selectPC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.selected = true;
      participant
        .save()
        .then(() => {
          let error = "Team has been selected succesfully!";
          req.flash("error", error);
          res.redirect("/programming-contest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/programming-contest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/programming-contest/list");
    });
};

module.exports = {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
};