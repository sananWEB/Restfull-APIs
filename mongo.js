const mongo=require("mongoose")
require("dotenv").config();
mongoError=require("mongoose-mongodb-errors")
mongo.Promise=global.Promise;
//console.log(process.env.MONGO_URI);
mongo.plugin(mongoError);
mongo.connect(process.env.MONGO_URI)