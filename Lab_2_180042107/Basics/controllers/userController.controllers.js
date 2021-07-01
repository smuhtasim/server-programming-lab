const getRegister = (req,res) =>{
    res.sendFile("register.html",{root:"./views/users"})
}

const postRegister = (req,res)=>{
    // const username = req.body.username;
    // const email = req.body.email;
    // //res.sendFile("register.html",{root:"./views/users"})
    // res.send(
    //     `<h1>user with email ${email} and username ${username} is requesting to registrer<h1>`
    // );
    res.redirect("/dashboard")
}

const getLogin = (req,res)=>{
    const id = req.query.id;
    const username = req.query.username;
    res.send(`user with ID - ${id} username - ${username} is trying to login`);
}

const getDashboard = (req,res)=>{
    res.send(
        `User Dashboard`
    )
}

module.exports={getDashboard,getLogin,getRegister,postRegister}