const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
require('dotenv').config();
const userRoutes = require('./routes/v1/users.route.js');
const { connectToServer } = require('./utils/dbConnects.js');


app.use(cors());
app.use(express.json());
 

connectToServer((err)=>{
    if(!err){
        app.listen(port,()=>{
            console.log(`Running Spectrum CC server at port :${port}`);
        })
    }
    else{
        console.log(err);
    }
});



app.use('/api/v1/app',userRoutes);


app.all('*',(req,res)=>{
    res.send('No routes found!');
})

app.get('/',(req,res)=>{
    res.send('Response from server of Spectrum CC!')
});
