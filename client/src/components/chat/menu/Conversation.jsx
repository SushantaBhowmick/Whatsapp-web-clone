import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../services/api";


const Conversation = ({ user }) => {

  const {setPerson,account} = useContext(AccountContext)

  const getUser=async()=>{
    setPerson(user)
    await setConversation({senderId:account.sub,reciverId:user.sub})
  }

  return (
    <Box
    onClick={()=>getUser()}
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

      <Box>
        <Box>{user.name}</Box>
      </Box>
    </Box>
  );
};

export default Conversation;
