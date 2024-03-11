const express = require ("express");
const app = express();
const videos = require("./routes/videos.js");
const cors = require("cors");
require("dotenv").config();

const {PORT,API_KEY} = process.env;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/",videos);

// app.get("/test",(req,res)=>{
//     res.send("successfully connected!")
// })

app.listen(PORT,()=>{
    console.log(`server running at PORT :  ${PORT}`);
});