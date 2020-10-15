
//create Collection
const mongo=require("mongoose")
const schema=mongo.Schema({
    _id:{
        type:"number",
        require:true,
    },

    title:{
        type:"String",
        require:true,
    },
  
    content:{
        type:"String",
        require:true,
    },


})
module.exports=mongo.model("model_name",schema)