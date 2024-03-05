const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/videos",(req,res)=>{
    const videosJSON = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosJSON);
    res.status(201).send(videos);
});

router.get("/videos/:id",(req,res)=>{
    const videosArray = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosArray);
    const selectedVideo = videos.find((video)=>(video.id === req.params.id))
    res.send(selectedVideo);
});

router.post("/videos",(req,res)=>{
    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        comment:req.body.comment
    };
    videos.push(newVideo);
    res.send(videos);
})

module.exports = router;