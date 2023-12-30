const mongoose=require("mongoose")
const connectdb=(url)=>{
    return mongoose.connect(url,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:false,
     useUnifiedTopology:true
    })
}
const taskschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength:[20,"maxlength is 20"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})
const Task=mongoose.model('Task',taskschema)
module.exports={
    connectdb,Task
}