const getLogin = (req,res)=>{
    res.render("users/login.ejs");
}

const postLogin = (req,res)=>{
    const {email,password} = req.body;
    console.log(email);
    console.log(password);
}

const getRegister = (req,res)=>{
    res.render("users/register.ejs");
}

const postRegister = (req,res)=>{
    const {name, email, password, confirm_password} = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirm_password);

    const errors = []
    if(!name || !email || !password || !confirm_password){
        errors.push("All fileds are required");
    }
    if(password.length<6){
        errors.push("Password should be atleast 6 characters")
    }
    if(password !== confirm_password){
        errors.push("Passwords do not match");
    }
    if(errors.length>0)
    {
        console.log(errors);
    }else{
        res.redirect("users/login");
    }

}

module.exports = {
    getLogin,getRegister,postLogin,postRegister
}