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
        const result = db.collection('blog').insertOne(blog);
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
        const result = db.collection('teacher').insertOne(details);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}


module.exports.addCourse = async(req,res) =>{
    try{
        const db = getDb();
        const blog = req.body;
        const result = db.collection('courses').insertOne(blog);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
}