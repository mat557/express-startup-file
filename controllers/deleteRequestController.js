const { getDb } = require("../utils/dbConnects")



module.exports.deleteUserRrequest = async(req,res) =>{
    try{
        const db = getDb();
        const email = req.params.email;
        const filter = { email : email }
        const result = await db.collection('users').deleteOne(filter);   
        if (result.deletedCount === 1) {
            res.json(result);
          } else {
            res.json({result , message : "Nothing found with this email.Couldnt delete!"});
          }
    }
    catch(err){
        console.log(err.message)
    }
}