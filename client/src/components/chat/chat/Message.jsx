import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatDate } from "../../../utils/commonUtil";
import { AccountContext } from "../../../context/AccountProvider";

const Message = ({ message }) => {

    const { account } = useContext(AccountContext);


  return (
    <Box
    padding={'2px 20px'}
    >
    {
        account.sub===message.senderId?
        <Box
        bgcolor={"#dcf8c6"}
        maxWidth={"60%"}
        marginLeft={"auto"}
        padding={"6px"}
        width={"fit-content"}
        borderRadius={"10px"}
        sx={{ wordBreak: "break-word" }}
        display={'flex'}
        alignItems={'center'}
      >
        <Typography fontSize={"14px"} padding={"0 25px 0 5px"}>
          {message.text}
        </Typography>
        <Typography
          fontSize={"10px"}
          color={"#919191"}
          wordBreak={"keep-all"}
          maxWidth={'30px'}
          marginTop={'auto'}
        >
          {formatDate(message.createdAt)}
        </Typography>
      </Box>
      :
      <Box
        bgcolor={"#FFFFFF"}
        maxWidth={"60%"}
        padding={"6px"}
        width={"fit-content"}
        borderRadius={"10px"}
        sx={{ wordBreak: "break-word" }}
        display={'flex'}
      >
        <Typography fontSize={"14px"} padding={"0 25px 0 5px"}>
          {message.text}
        </Typography>
        <Typography
          fontSize={"10px"}
          color={"#919191"}
          wordBreak={"keep-all"}
          maxWidth={'30px'}
          marginTop={'auto'}
        >
          {formatDate(message.createdAt)}
        </Typography>
      </Box>
    }
      

    
    </Box>
  );
};

export default Message;
