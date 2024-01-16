import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../../../constant/data";

const EmptyChat = () => {
  return (
    <Box bgcolor="#f8f9fa" padding="30px 0" textAlign={"center"} height="100%">
      <Box padding={"0 200px"}>
        <img
        className="emtImg"
          src={emptyChatImage}
          alt="defaultImage"
        />
        <Typography
          sx={{fontSize:'32px'}}
          fontFamily={"inherit"}
          fontWeight={300}
          color={"#41525d"}
          marginTop={"25px 0 10px 0"}
        >
          Whatsapp Web
        </Typography>
        <Typography
        fontSize={"14px"}
          fontFamily={"inherit"}
          fontWeight={400}
          color={"#667781"}
        >
          Now send and receive messages without keeping your phone online.
        </Typography>
        <Typography
         fontSize={"14px"}
          fontFamily={"inherit"}
          fontWeight={400}
          color={"#667781"}>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.{" "}
        </Typography>
        <Divider sx={{ margin: "40px 0", opacity: 0.4 }} />
      </Box>
    </Box>
  );
};

export default EmptyChat;
