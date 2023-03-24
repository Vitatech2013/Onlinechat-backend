import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({
    Topic:{
        type: String
       
    }
    
}, {
    timestamps: true
});

const model = mongoose.model('Addtopic', topicSchema)



export default model