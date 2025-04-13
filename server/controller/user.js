const addNewUser=(req,res)=>{
    res.status(200).json({message:"User added successfully"});
}

export {addNewUser};