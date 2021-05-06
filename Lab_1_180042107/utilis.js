const helloFunction = require("./helloWorld");

// helloFunction.helloFunc();

// helloFunction.boloFunc(6,9);

const localName = helloFunction.varName;

// console.log(localName);

//setInterval

setInterval(()=>
{
    helloFunction.helloFunc()
},1000);

setTimeout(()=>
{
    helloFunction.boloFunc("a","b");
},5000);