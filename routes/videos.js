const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/videos",(req,res)=>{
    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);
    videos.map((video)=>{
        return video.comments = [];
    })
    res.status(201).send(videos);
});

router.get("/videos/:id",(req,res)=>{
    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);
    const selectedVideo = videos.find((video)=>(video.id === req.params.id))
    res.send(selectedVideo);
});

router.post("/videos",(req,res)=>{
    const videosBuffer = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(videosBuffer);
    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        channel:"Red Cow",
        image:"http://localhost:8080/images/dogs.jpg",
        description: req.body.description,
        views:"787",
        likes:"123",
        duration:"4:01",
        video:"https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
        timestamp:Date.now(),
        comments:[]
    };
    videos.push(newVideo);
    console.log(videos);
    const videosJson = JSON.stringify(videos);
    fs.writeFileSync("./data/videos.json",videosJson);
    res.send(videos);
})

module.exports = router;