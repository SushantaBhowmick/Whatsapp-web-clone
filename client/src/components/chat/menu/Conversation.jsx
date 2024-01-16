import { Box } from "@mui/material";
import React from "react";

const Conversation = ({ user }) => {
  return (
    <Box
      display={"flex"}
      // justifyContent={'space-between'}
      // alignItems={"center"}
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
