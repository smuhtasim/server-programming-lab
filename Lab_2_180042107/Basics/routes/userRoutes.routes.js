const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require("../middlewares/auth.middleswares");
const {getDashboard,getLogin,getRegister,postRegister} = require("./../controllers/userController.controllers");

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/login",getLogin);
router.get("/register",getRegister);
// router.post("/register",isLoggedIn,postRegister);
// router.get("/dashboard",getDashboard);
router.route("/register").all(isLoggedIn).post(postRegister).get(getRegister);
router.get("/dashboard",getDashboard);

// router.get("/login",(req,res)=>{
//     const id = req.query.id;
//     const username = req.query.username;
//     res.send(`user with ID - ${id} username - ${username} is trying to login`);
// })



// router.get("/register",(req,res)=>{
//     res.sendFile("register.html",{root:"./views/users"})
// })




// router.post("/register",isLoggedIn,(req,res)=>{
//     // const username = req.body.username;
//     // const email = req.body.email;
//     // //res.sendFile("register.html",{root:"./views/users"})
//     // res.send(
//     //     `<h1>user with email ${email} and username ${username} is requesting to registrer<h1>`
//     // );
//     res.redirect("/dashboard")
// })



// router.get("/dashboard/:id/:username",(req,res)=>{
//     const id = req.params.id;
//     const username = req.params.username;
//     res.send(
//         `user with ID - ${id} username - ${username} is trying to access dashboard`
//     )
// })

// router.get("/dashboard",(req,res)=>{
//     res.send(
//         `User Dashboard`
//     )
// })



module.exports = router;