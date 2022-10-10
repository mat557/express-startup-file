const { ObjectID } = require("bson");
const { getDb } = require("../utils/dbConnects")



module.exports.getAllUsers = async(req,res) =>{
    try{
        const db = getDb();
        const result = await db.collection('users').find().toArray();
        res.send(result);
    }catch(err){
        console.log('from error message',err.message)
    }
}

module.exports.getAllCourse = async(req,res) =>{
    try{
        const db = getDb();
        const result = await db.collection('courses').find().toArray();
        res.send(result);
    }catch(err){
        console.log('from error message',err.message)
    }
}

//home course and get course by id for use params need twice route -> courseById
module.exports.getSingleUser = async(req,res) =>{
    try{
        const email = req.params.email;
        const db = getDb();
        const result = await db.collection('users').findOne({ email : email });
        if(!result){
            return res.status(400).json( { success : false , error : "No data found with this email."} )
        }
        res.send(result);
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports.getSingleCourse = async( req , res ) =>{
    try{
        const id = req.params.id;
        const query = ObjectID(id);
        const db = getDb();
        const result = await db.collection('courses').findOne(query);
        if(!result){
            return res.status(400).json( { success : false , error : "No data found with this email."} )
        }
        res.status(201).send(result);
    
    }
    catch(err){
        console.log(err.message);
    }
}


module.exports.getSingleEnrole = async(req,res) =>{
    try{
        const email = req.params.email;
        const query = { email : email };
        const db = getDb();
        const result = await db.collection('enrole').find(query).project( { code : 1 } , { _id : 0 } ).toArray();
        if(!result){
            return res.status(400).json( { success : false , error : "No data found with this email."} )
        }
        res.status(201).send(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.getEnroleByCondition = async(req,res) =>{
    try{
        const db = getDb();
        const subject = req.query.subject;
        const batch = req.query.batch;
        const result = await db.collection('enrole').find(
                {
                    $and: [ 
                        { batch : { $regex: batch } }, 
                        { code : { $regex: subject } }  
                    ] } ).toArray()
                    ;
                    console.log(result)
        if(!result){
            return res.status(410).json({ message : "No data found with this query! Try new"});
        }
        return res.status(210).json(result)
        
    }
    catch(err){
        console.log(err);
    }
}




module.exports.getAllComment = async(req,res) =>{
    try{
        const db = getDb();
        const page = parseInt(req.query.page);
        console.log(page)
        const size = 3;
        const query = {};
        const cursor = db.collection('comment').find(query);
        let comments;
        if(size || page){
          comments = await cursor.skip(page * size).limit(size).toArray();
        }
        else{
          comments = await cursor.toArray();
        }
        res.send(comments);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getCommentCount = async(req,res) =>{
    try{
        const db = getDb();
        const count = await db.collection('comment').estimatedDocumentCount();
        console.log(count)
        res.status(205).json(count);
    }
    catch(err){
        console.log(err);
    }
}


//not done yet
module.exports.getSingleEnrol = async(req,res) =>{
    try{
        const parameter = req.params.serial;
        const filter = {serial : parameter};
        const db = getDb();
        const result = await db.collection('enrole').findOne(filter);
        res.send(result);
    }
    catch(err){
        console.log(err.message);
    }
}



module.exports.getAllBlog = async(req,res) =>{
    try{
        const db = getDb();
        const result = await db.collection('blog').find().toArray();
        if(!result){
            return res.status(400).json( { success : false , error : "No data found with this email."} )
        }
        res.status(206).json(result);
    }
    catch(err){
        console.log(err.message);
    }
}



module.exports.getTeacherByID = async(req,res) =>{
    try{
        const email = req.params.email;
        const query = { email : email }
        const db = getDb();
        const result = await db.collection('teacher').findOne(query);
        if(!result){
            return res.status(400).json( { success : false , error : "No data found with this email."} )
        }
        res.status(207).json(result);
    }
    catch(err){
        console.log(err.message);
    }
}