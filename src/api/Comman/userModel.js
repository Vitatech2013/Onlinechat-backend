import mongoose from 'mongoose'

const registrtionSchema = new mongoose.Schema({

   FirstName: {
        type: String,
       required: true
    },
   LastName: {
        type:String,
        required: true
    },
    UserName: {
        type: String,
       required: true
    },
   Password: {
        type:String,
        required: true
    },
    Emailid: {
        type:String,
        required: true
    },
    PhoneNo: {
       
        type: String,
       required: true
    },
    Qualification: {
        
        type: String,
       required: true
    }
    
   
}, {
    timestamps: true
});

const model = mongoose.model('Registration', registrtionSchema)


export default model