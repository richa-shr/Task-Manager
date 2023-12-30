const express=require("express")
const router=express.Router()
const app=express()
const {getalltask,gettask,postalltask,patchtask,deletetask}=require("./task")
//app.use(express.static("./public")router.rout
require("dotenv").config();
const not_found=require("./middleware/not-found")
const errorhandler=require("./middleware/errorhandler")
app.use(express.static("./public"))
app.use(express.json())
const url=process.env.mongo_url
const {connectdb}=require("./connection")
app.route("/api/v1/tasks").get(getalltask).post(postalltask)
app.route("/api/v1/tasks/:id").get(gettask).patch(patchtask).delete(deletetask)

app.use(not_found)//using middleware for wrong route
app.use(errorhandler)
const start=async()=>{
    try {
        await connectdb(url)
        app.listen(3000)
        console.log("connection set")
    } catch (error) {
       console.log(error) 
    }

}
start()//we have set the server this way that if coonection to mongodb is successful then only we spin our server

