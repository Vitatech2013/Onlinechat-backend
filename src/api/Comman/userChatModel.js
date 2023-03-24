import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    UserName:{
        type: String
       
    },
    ToUser:{
        type: String
       
    },
    Chat:{
        type: String
       
    }
    
}, {
    timestamps: true
});

const model = mongoose.model('AddChat', commentSchema)



export default model