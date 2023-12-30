const {Task}=require("./connection")
const asyncwrapper=require("./middleware/async")
const getalltask=asyncwrapper(async(req,res)=>{
    
       const tasks=await Task.find({})
       res.status(201).json({tasks}); 
    
}
)
const postalltask=asyncwrapper(async(req,res)=>{
    
        const task=await Task.create(req.body)
    res.status(201).json({task})
    
    
})
const gettask=asyncwrapper(async(req,res)=>{
    
        const task=await Task.findOne({_id:req.params.id})
        if(!task)
        return res.status(404).json({msg:"no task matches the given id"})
        res.status(201).json({task})
    
})

const patchtask=asyncwrapper(async(req,res)=>{
    
        const {id:taskid}=req.params
         const task=await Task.findOneAndUpdate({_id:taskid},req.body,{
             new:true,
             runValidators:true,
         })
     if(!task)
         return res.status(404).json({msg:"no task matches the given id"})
     res.status(200).json({task})
     
})
const deletetask=asyncwrapper(async(req,res)=>{
    
       const {id:taskid}=req.params
        const task=await Task.findOneAndDelete({_id:taskid})
    if(!task)
        return res.status(404).json({msg:"no task matches the given id"})
    res.status(200).json({task})
    
    
})
module.exports={
    getalltask,gettask,postalltask,patchtask,deletetask
}