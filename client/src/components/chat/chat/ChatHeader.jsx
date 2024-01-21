import { Call, MoreVert, Search, VideoCall } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ChatHeader = ({person}) => {

  const {activeUsers} =useContext(AccountContext)

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      height={"45px"}
      bgcolor={"#ededed"}
      padding={"7.5px 16px"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <img
          style={{
            height: 40,
            width: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={person.picture}
          alt="dp"
        />
        <Box marginLeft={"15px"}>
          <Typography>{person.name}</Typography>
          <Typography fontSize={"15px"} color={"rgb(0,0,0,0.6)"}>
            {activeUsers?.find(user=>user.sub===person.sub)?'Online':'Ofline'}
          </Typography>
        </Box>
      </Box>

      <Box display={'flex'} gap={'30px'}>
        <Search  />
        <Call  />
        <VideoCall  />
        <MoreVert  />
      </Box>
    </Box>
  );
};

export default ChatHeader;
