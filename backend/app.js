const express = require("express");
const app = express();
require("./connection/conn.js");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");
app.use(express.json());


app.get('/' ,(req,res) => { 
    res.send("hello"); 
});

app.use("/api/v1" , auth);
app.use("/api/v2" , list);


app.listen(1000 , () => {
    console.log("server started");
});