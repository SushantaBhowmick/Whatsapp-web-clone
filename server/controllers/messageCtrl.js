import Conversation from "../models/conversation.js";
import Message from "../models/message.js";

export const newMessage=async(req,res)=>{
    try {
       let newMessage = new Message(req.body);
       await newMessage.save();
       await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})

        res.status(200).json({
          success: true,
          msg:"Message has been sent successfully!",
          newMessage
        });
    
      } catch (error) {
        res.status(500).json({
          success: false,
          msg: "Internal Server Error",
        });
      }
}