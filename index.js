import express from "express";
import  mongoose  from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import StudentModel from "./schema/student_schema.js";



//configuring dotenv to use environment variables stored in .env file
dotenv.config()
//creating an instance of express server
const app = express();

// using the cors middleware to get the body of our requst in json format
app.use(cors());
app.use(express.json());


// assigning port number to the server
const port=8000;

//assigning port numberto server 
const db = process.env.DB_URL;

//creating new student 
app.post('/student',async(req,res)=>{
    const{frist_name,last_name,date_of_birth,school}=req.body;
    console.log('New student has been created',{frist_name,last_name,date_of_birth,school});
    const studentModel= await StudentModel.create({
        frist_name,
        last_name,
        date_of_birth,
        school
    })
    if(studentModel){
        return res. status(201).json({
            status: true,
            message: 'Student profile successfully created',
            data: studentModel
        })
    
    }else {
        return res. status(400).json({
            status: false,
            message: 'student profile was not created successfully',
        })
    }


})
// getting one todo
app.get('/ student', async(req,res)=>{
    const{id} = req.params;
    console.log("New student created",status);
    const studentModel=await  StudentModel.findById({});
    if(todoModel){
        return res. status(201).json({
            status: true,
            message: 'User has been created',
            data:studentModel
        })
    
    }else {
        return res. status(400).json({
            status: false,
            message: 'Student profile was not fetched  ',
        })
    }
})

// //connecting to MongoDB database
// mongoose.connect(db,{
//     useNewURLParser: true,
//     useUnifiedTopology:true  
//   }).then(()=>{
//       console.log('Connected to db');
//   }).catch((error)=>{console.log(error);})

mongoose.connect (db, {
    useNewURLParser: true,
    UseUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to db');
}).catch((error)=>{console.log(error);})

//listening to our port
app.listen(port,()=>{ console.log('server is running')});

