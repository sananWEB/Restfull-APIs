const { get } = require("mongoose");

const routes=require("express").Router();


routes.get("/",(req,res)=>{
    res.send({
        msg:"YES ITS WORKS"
    })
})


routes.get("/post",(req,res)=>{
    res.send({
        msg:"YES ITS WORKS/post"
    })
})


routes.get("/id/:id",(req,res)=>{
    res.send({
        msg:`YES ITS WORKS/id/${req.params.id}`
    })
})



module.exports=routes;