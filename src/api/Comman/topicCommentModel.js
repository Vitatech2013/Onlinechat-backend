import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    UserName:{
        type: String
       
    },
    Topic:{
        type: String
       
    },
    Comment:{
        type: String
       
    }
    
}, {
    timestamps: true
});

const model = mongoose.model('Addcomment', commentSchema)



export default model