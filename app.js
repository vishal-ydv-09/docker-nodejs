const express = require("express");

const app = express();

app.get('/', (req,res) => {

    res.send ("<h2> Hello from node ,From the inside docker Container.....</h2>")
    //for the master branch code 
    console.log("App is running on branch master...");

    console.log("App is running ");
    console.log("New line added in master branch");
} );

app.listen(
    3000, () => {
        console.log("App is running on 3000 port...");
    }
)
