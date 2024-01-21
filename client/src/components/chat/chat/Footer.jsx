import {
  AttachFile,
  EmojiEmotionsOutlined,
  Mic,
  Send,
} from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, uploadFile } from "../../../services/api";

const Footer = ({ sendText, setText, text, conversation, file, setFile,setImage }) => {
  const { account, person } = useContext(AccountContext);

  const handlesubmit = async () => {
    let message = {
      senderId: account.sub,
      reciverId: person.sub,
      conversationId: conversation._id,
      type: "text",
      text: text,
    };
    await newMessage(message);
    setText("");
  };

  const onfileChange = (e) => {
    setFile(e.target.files[0]);
    setText(e.target.files[0].name?e.target.files[0].name:"Loru admi kuch image select kar");
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let res = await uploadFile(data);
        console.log(res.imageUrl)
        setImage(res.imageUrl)
      }
    };
    getImage();
  }, [file,setImage]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      height={"7vh"}
      bgcolor={"#ededed"}
      width={"100%"}
      padding={"0 15px"}
    >
      <Box marginRight={"10px"} display={"flex"} gap={"10px"}>
        <EmojiEmotionsOutlined
          sx={{
            color: "gray",
            cursor: "pointer",
            ":hover": { color: "black" },
          }}
        />
        <label htmlFor="fileInput">
          <AttachFile
            sx={{
              transform: "rotate(40deg)",
              color: "gray",
              cursor: "pointer",
              ":hover": { color: "black" },
            }}
          />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => onfileChange(e)}
        />
      </Box>
      <Box
        sx={{
          borderRadius: "18px",
          bgcolor: "#FFFFFF",
          // width:"calc(94%-100px)"
          width: "58vw",
          overflowX: "auto",
        }}
      >
        <InputBase
          sx={{
            width: "100%",
            padding: "20px",
            paddingLeft: "25px",
            fontSize: "14px",
            height: "20px",
          }}
          value={text}
          placeholder="Type a messege"
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => sendText(e)}
        />
      </Box>
      <Box marginLeft={"10px"} display={"flex"} gap={"10px"}>
        <Mic sx={{ color: "gray" }} />
        <Send
          onClick={handlesubmit}
          sx={{
            color: "gray",
            cursor: "pointer",
            marginRight: "20px",
            ":hover": { color: "black" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
