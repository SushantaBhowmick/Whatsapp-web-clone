import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId:{
        type: String,
    },
    senderId:{
        type: String,
    },
    reciverId:{
        type: String,
    },
    text:{
        type: String,
    },
    type:{
        type: String,
    },
},
{timestamps:true})

const Message = mongoose.model('message',messageSchema)

export default Message;