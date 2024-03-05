const express = require ("express");
const app = express();
const videos = require("./routes/videos.js");
const cors = require("cors");
require("dotenv").config();

const {PORT,API_KEY} = process.env;

app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin:["localhost:8084","BrainFlix-Special-apiKey"]
}));

app.use("/",videos);


app.listen(PORT,()=>{
    console.log(`server running at PORT: http://localhost: ${PORT}`);
});