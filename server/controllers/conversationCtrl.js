import Conversation from "../models/conversation.js";
import User from "../models/userModel.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;

    const exists = await Conversation.findOne({
      members: { $all: [senderId, reciverId] },
    });
    if (exists) {
      return res.status(200).json({
        success: true,
        msg: "Conversation already exists",
      });
    }
    const newConv = new Conversation({
      members: [senderId, reciverId],
    });

    await newConv.save();
    res.status(201).json({
      success: true,
      msg: "Conversation saved successfully!",
      newConv,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;

   let conversation = await Conversation.findOne({members:{$all: [senderId, reciverId] }})
console.log(conversation)
    res.status(200).json({
      success: true,
      conversation,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
