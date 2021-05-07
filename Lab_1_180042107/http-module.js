const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.write("<h1>This is base URL</h1>");
        res.end();
    }
    else if(req.url == "/home")
    {
        res.write("<h1>This is Home page.</h1>");
        res.end();
    }
    else 
    {
        res.write("<h1>This page doesn't exist.</h1><br><a href = '/'>Go to base url</a>");
        res.end();
    }
});



module.exports = {testSever:server};