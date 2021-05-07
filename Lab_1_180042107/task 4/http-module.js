const http = require("http");
const contents = require("./load-contents");

const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.write(contents.indexPage);
        res.end();
    }
    else if(req.url == "/about")
    {
        res.write(contents.aboutPage);
        res.end();
    }
    else if(req.url == "/blog")
    {
        res.write(contents.blogPage);
        res.end();
    }
    else if(req.url == "/contact")
    {
        res.write(contents.contactPage);
        res.end();
    }
    else if(req.url == "/index")
    {
        res.write(contents.indexPage);
        res.end();
    }
    else if(req.url == "/work")
    {
        res.write(contents.workPage);
        res.end();
    }
    else if(req.url == "/pricing")
    {
        res.write(contents.pricingPage);
        res.end();
    }
    else if(req.url == "/services")
    {
        res.write(contents.servicesPage);
        res.end();
    }
    else
    {
        res.write("<h1>This page doesn't exist.</h1><br><a href = '/'>Go to base url</a>");
        res.end();
    }
});


module.exports = {testSever:server};