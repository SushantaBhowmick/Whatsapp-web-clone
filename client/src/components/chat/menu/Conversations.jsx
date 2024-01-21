import { Box, Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../../services/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Conversations = ({ text }) => {
  const [user, setUser] = useState([]);
  const { account,socket,setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getUser();
      const filterdData = data.users.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setUser(filterdData);
    };

    getData();
  }, [text]);


  useEffect(()=>{
    socket.current.emit('addUser',account);
    socket.current.on('getUsers',users=>{
      setActiveUsers(users)
    })
  },[account,setActiveUsers,socket])

  return (
    <Box overflow={"overlay"} height={"81vh"}>
      {user &&
        user.map((item, index) => (
          <Box key={item._id}>
            {item.sub !== account.sub && (
              <>
                <Conversation user={item} />
                <Divider
                  sx={{
                    margin: "0 0 0 70px",
                    bgcolor: "#e9edef",
                    opacity: 0.6,
                  }}
                />
              </>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default Conversations;
