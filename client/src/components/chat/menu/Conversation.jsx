import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation, setConversation } from "../../../services/api";
import { formatDate } from "../../../utils/commonUtil";

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, reciverId: user.sub });
  };
  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        senderId: account.sub,
        reciverId: user.sub,
      });
      setMessage({
        text: data?.conversation.message,
        timestamp: data?.conversation.updatedAt,
      });
    };
    getConversationMessage();
  }, [newMessageFlag, account.sub, user.sub]);

  return (
    <Box
      onClick={() => getUser()}
      display={"flex"}
      height={"45px"}
      padding={"13px 0"}
      sx={{ cursor: "pointer" }}
    >
      <Box>
        <img
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            padding: "0 14px",
          }}
          src={user.picture}
          alt=""
        />
      </Box>

      <Box width={'100%'}>
       <Box display={'flex'}>
       <Typography>{user.name}</Typography>
        {message?.text && (
          <Typography
          fontSize={'12px'}
          marginLeft={'auto'}
          color={'#00000099'}
          marginRight={'20px'}
          >{formatDate(message?.timestamp)}</Typography>
        )}
       </Box>
       <Box>
        <Typography
        color={'rgba(0, 0, 0, 0.4)'}
        fontSize={'14px'}
        >
          {message?.text?.includes("localhost") ? "media" : message.text}
        </Typography>
      </Box>
      </Box>
    
    </Box>
  );
};

export default Conversation;
