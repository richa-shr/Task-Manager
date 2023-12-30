const errorhandler=(err,req,res,next)=>{
    res.status(500).json({msg:err})
}
module.exports=errorhandler