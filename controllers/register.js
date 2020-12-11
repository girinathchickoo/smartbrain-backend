
const handleregister=(req,res,db,bcrypt)=>{
	const {name,email,id,password}=req.body;
	console.log(email,id,password,name)

	const hash = bcrypt.hashSync(password);
	if(!email || !name || !password){
		 return res.status(400).json('not enough info')}
	db.transaction((trx)=>{
		trx.insert({email:email,
					hash:hash}).into('login')
		.returning('email').then(loademail=>{return trx('users')
    .returning("*").insert({name: name,email:loademail[0]
    	,joined:new Date()}).then(response=>{res.json(response[0])})
    .then(trx.commit).catch(trx.rollback)
	}).catch(err=>{res.json('already exists')}) })}


module.exports={
	handleregister:handleregister

}