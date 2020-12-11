const clarifai=require('clarifai');
 const app = new Clarifai.App({
 apiKey: 'a42ab7fc790043079b507dc1f0e7b368'
});

 const handleapicall=(req,res)=>{
 	console.log('api')
 	app.models.predict('53e1df302c079b3db8a0a36033ed2d15', req.body.input)
 		.then(response=>{const bound=response.outputs[0].data.regions[0].region_info.bounding_box
 			res.json(bound)})
 }




const handleimage=(req,res,db)=>{
	const {id}=req.body;
		db('users').where('id','=',id).increment('entries',1).returning('entries').then(response=>res.json(response[0]))

}




module.exports={
	handleimage:handleimage,
	handleapicall:handleapicall
}