const express = require("express");

const app = express();

app.get('/', (req,res) => {

    res.send ("<h2> Hello from node ,From the inside docker Container.....</h2>")
    //it is for testing purpose only
        console.log("App is running on staging environment...");
    //for the master branch code 
        console.log("App is running on branch master...");
} );

app.listen(
    3000, () => {
        console.log("App is running on 3000 port...");
    }
)
