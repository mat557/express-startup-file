const { ObjectID } = require('bson');
const { getDb } = require('../utils/dbConnects');


module.exports.updateSeatNumber = async(req,res) =>{
    try{
        const db = getDb();
        const id = req.params.id;
        const filter = { _id : ObjectID(id)};
        const value = req.body;
        const options = { upsert : true };
        const updatedDoc = {
            $set : value,
        };
        const result = await db.collection('courses').updateOne( filter , updatedDoc , options )
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
}


module.exports.updateProfileData = async(req,res) =>{
    try{
        const db = getDb();
        const email = req.params.email;
        const filter = { email : email }
        const options = { upsert : true };
        const data = req.body;
        const updatedDoc = {
            $set : data,
        };
        const result = await  db.collection('users').updateMany( filter , updatedDoc , options);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.updateAndAddComment = async(req,res) =>{
    try{
        const db = getDb();
        const email = req.params.email;
        const doc = req.body;
        const options = { upsert : true };
        const filter = { email : email };
        const updatedDoc = {
            $set : doc,
        };
        const result = await db.collection('comment').updateMany( filter , updatedDoc , options );
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}