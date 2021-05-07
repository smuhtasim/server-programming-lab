 //Synchronus and Asynchronus Function

 //readFile
 //writeFile
 //appendFile
 //Delete
 //rename

 const fs = require("fs");

//  fs.writeFileSync("./contents/demoFile.txt","What's in the box" );
fs.unlink("./contents/demoFile.txt",(err)=>{
    if(!err)
    {
        console.log("deleted succesfully");
    }
});

//  fs.appendFileSync("./contents/demoFile.txt","That's what she said");

//  fs.rename("./contents/demoFile.txt","./contents/textFile.txt",(err)=>{
//      if(err)
//      {
//          console.log(err);
//      }
//      else
//      {
//          console.log("Renamed Succesfully");
//      }
//  });

// console.log("before");

// fs.readFile("./contents/textFile.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         fs.appendFileSync("./contents/textFile.txt","let's hear Lullaby.");
//         fs.readFile("./contents/textFile.txt","utf-8",(err,data)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log(data);
//             }
//         })
//     }
// })
 
// console.log("after");