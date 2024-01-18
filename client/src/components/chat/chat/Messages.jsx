import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../services/api";
import Message from "./Message";

const Messages = ({ person, conversation }) => {
  const [messages, setMessages] = useState([]);
  const { account } = useContext(AccountContext);
  const [text, setText] = useState("");
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  
  const bgImage ='url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")';

  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data.messages);
    };
    getMessagesDetails();
  }, [conversation._id,newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        reciverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: text,
      };
      await newMessage(message);
      setText("");
      setNewMessageFlag(prev=>!prev)
    }
  };

  return (
    <Box sx={{ backgroundImage: bgImage }}>
      <Box height={"80vh"} sx={{ overflowY: "auto" }}>
        {messages && messages.map((item)=>(
          <Box key={item._id}>
            <Message message={item} />
          </Box>
        ))}
      </Box>
      <Box minWidth={"300px"}>
        <Footer
          sendText={sendText}
          setText={setText}
          text={text}
          conversation={conversation}
        />
      </Box>
    </Box>
  );
};

export default Messages;
