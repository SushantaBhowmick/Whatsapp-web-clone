import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {
  const { person,account } = useContext(AccountContext);
  const [conversation,setConversation]=useState({})

  useEffect(()=>{
    const getConversationDetails=async()=>{
      let data = await getConversation({
        senderId:account.sub,
      reciverId:person.sub,
      })
      setConversation(data.conversation)
    }
    getConversationDetails()
  },[person.sub])

  return (
    <Box>
      <Box>
        <ChatHeader person={person} />
      </Box>
      <Box>
        <Messages person={person} conversation={conversation} />
      </Box>
      {/* <Box minWidth={"69vw"} overflow={"auto"}>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default ChatBox;
