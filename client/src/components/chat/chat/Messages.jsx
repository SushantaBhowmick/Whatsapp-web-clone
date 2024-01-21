import { Box } from "@mui/material";
import React, { useContext, useEffect, useState, useRef } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../services/api";
import Message from "./Message";
// import { Socket } from "socket.io-client";

const Messages = ({ person, conversation }) => {
  const [messages, setMessages] = useState([]);
  const { account, socket,newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  const [text, setText] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  const bgImage =
    'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")';

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data.messages);
    };
    getMessagesDetails();
  }, [conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: text,
        };
      } else {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setText("");
      setImage("");
      setFile("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ backgroundImage: bgImage }}>
      <Box height={"80vh"} sx={{ overflowY: "auto" }}>
        {messages &&
          messages.map((item) => (
            <Box key={item._id} ref={scrollRef}>
              <Message message={item} />
            </Box>
          ))}
      </Box>
      <Box minWidth={"300px"}>
        <Footer
          sendText={sendText}
          setText={setText}
          text={text}
          conversation={conversation}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Box>
    </Box>
  );
};

export default Messages;
