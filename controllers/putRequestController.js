const { getDb } = require('../utils/dbConnects');



module.exports.putToEnrole = async(req,res) =>{
    try{
        const db = getDb();
        const data = req.body;
        const docToAdd = await db.collection('enrole').insertOne(data);
        res.json(docToAdd);
    }
    catch(err){
        console.log(err);
    }
}



module.exports.putBlogPost = async(req,res) =>{
    try{
        const db = getDb();
        const blog = req.body;
        const result = await db.collection('blog').insertOne(blog);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.teacherRequest = async(req,res) =>{
    try{
        const db = getDb();
        const details = req.body;
        console.log(details)
        const result = await db.collection('teacher').insertOne(details);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.addUser = async(req,res) =>{
    try{
        const db = getDb()
        const email = req.params.email;
        const user = req.body;
        const filter = {email:email}
        const options = { upsert : true}
        const updateDoc = {
          $set:user,
        }
        const result = await db.collection('users').updateOne(filter, updateDoc, options);
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.addCourse = async(req,res) =>{
    try{
        const db = getDb();
        const blog = req.body;
        const result = await  db.collection('courses').insertOne(blog);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}