import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatDate,downloadMedia } from "../../../utils/commonUtil";
import { AccountContext } from "../../../context/AccountProvider";
import { GetApp as GetAppIcon } from '@mui/icons-material';
import { iconPDF } from "../../../constant/data";


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
        // alignItems={'center'}
      >
      {
        message.type==='file'? <ImageSteram message={message} /> :<TextMessage message={message} />
      }
       

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
       {
        message.type==='file'? <ImageSteram message={message} /> :<TextMessage message={message} />
      }
      </Box>
    }
      

    
    </Box>
  );
};

const ImageSteram =({message})=>{
  return(
        <Box 
        position={'relative'} 
        >
      {
        message?.text?.includes('.pdf')?
        <Box
        >
        <img src={iconPDF} alt="pdf" style={{ width: 80, objectFit:'cover'}} />
        <Typography style={{ fontSize: 14,wordBreak: "break-all"  }} >{message.text.split("/").pop()}</Typography>
        </Box>
        : <img className="sendImg" style={{width:"300px", height:"100%",objectFit:'cover'}} src={message.text} alt="message.text" />
      }
      <Box
        sx={{ wordBreak: "break-all" }}
        position={'absolute'} 
        bottom={0}       
        right={0}
        >
        <Typography
          fontSize={"10px"}
          color={"#919191"}
          wordBreak={"keep-all"}
          maxWidth={'30px'}
        >
          <GetAppIcon
          onClick={(e)=>downloadMedia(e,message.text)}
               fontSize='small' 
              style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%',":hover":{color:"black"} }} 
              sx={{":hover":{color:"black",cursor:'pointer',border:'1px solid #fff'}}}
          />
          {formatDate(message.createdAt)}
        </Typography>
        </Box>
        </Box>
  )
}

const TextMessage =({message})=>{
  return(
    <>
    <Typography fontSize={"14px"} padding={"0 25px 0 5px"}>
          {message.text}
        </Typography>
        <Box
        sx={{ wordBreak: "keep-all" }}
        marginTop={'auto'}
        >
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
    </>
  )
}

export default Message;
