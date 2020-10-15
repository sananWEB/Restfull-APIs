const express=require("express");

require("express-async-errors")
const app=express();
const mongo=require("mongoose")
const bodyParser=require("body-parser");
const { collection } = require("./model/post");

//DB connection
require("./mongo")


//database collection
require("./model/post")
const table=mongo.model("model_name")




//middileware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

  
app.post("/table", async (req,res)=>{
    console.log(req.body)


    ///save data in database
    try {
        const collection=new table();
        collection._id=req.body._id;
        collection.title=req.body.title;
        collection.content=req.body.content;

        await collection.save();
        res.send(collection)
    } catch (error) {
        console.log(error)

    }
})

app.get("/table",async (req,res)=>{
    try {
        var aa= await table.find()
                res.send(aa)
        
    } catch (error) {
        
    }
}
    )
app.post("/table/:id", async(req,res)=>{
    console.log(req.params.id)

    try {
        var aa= await table.find({title:req.params.id})
        res.send(aa)
        
    } catch (error) {
        
    }
    
})


app.post("/table/data/:id", async(req,res)=>{
    console.log(req.params)
         try{
             var aa=await table.updateOne(
                { _id : req.params.id },
                { $set: { title : req.body.title, content : req.body.content } }
             );
             res.send(aa);
         }
         catch (error) {
        
        }
        }
    )

   
    app.post("/table/delete/data",async(req,res)=>{

        try{
            const aa=await table.findByIdAndDelete({_id:req.body.objjj});
            res.send(aa)
        }
        catch (error) {
        
        }

         
    })







//routes
app.use("/get",require("./routes/post"))


//route not found //error // 404 page
app.use((req,res,next)=>{

    req.status=404;
const error=new Error("Route not found")

next(error);
})
//error handling
app.use((error,req,res,next)=>{
//console.log(req.status)
    res.status(req.status || 500).send({
        massage:error.message,
        stack:error.stack
    })
})


app.listen(5000,()=>{console.log("server is running!")})