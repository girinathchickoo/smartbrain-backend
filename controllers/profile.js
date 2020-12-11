
const handleprofile=(req,res,db)=>{
	const {id}=req.params;
	db('users').select('*').where('id','=',id)
	.then(response=>{
		if(response.length>0){
		  res.json(response)
		}else{
			res.json('no such user')
		}
		})

}


module.exports={
	handleprofile:handleprofile
}