//imorting mongoose library into our file
import mongoose from "mongoose"

//an instance of a Schema and model
const {Schema, model} = mongoose

//creating a variblefor our schema
const studentSchema= Schema({
frist_name :{
    type:String,
    required:true
},

last_name:{
    type: String,
    required:true
}, 

date_of_birth:{
    type: String,
    required: true
},
school:{
    type: String,
    required: true
},
status:{
    type: Boolean,
    required: false,
    default:false
}
})

const studentModel =model('student', studentSchema)

export default studentModel
