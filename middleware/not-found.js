const not_found=(req,res)=>{
    res.status(404).send("route not found")
}
module.exports=not_found