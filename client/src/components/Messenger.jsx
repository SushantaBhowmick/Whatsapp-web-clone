import React from "react";
import LoginDialog from "./account/LoginDialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
// const account =true;
  return (
    <Box height={"100vh"} bgcolor={"#DCDCDC"}>
      {account ? (
        <>
        <ChatHeader>
            <Toolbar />
          </ChatHeader>
        <ChatDialog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar />
          </Header>
          <LoginDialog />
        </>
      )}
    </Box>
  );
};

export default Messenger;
