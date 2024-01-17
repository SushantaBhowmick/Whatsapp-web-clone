import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import Footer from './Footer'
import { AccountContext } from '../../../context/AccountProvider'


const ChatBox = () => {

    const {person} = useContext(AccountContext)

  return (
    <Box>

    <Box>
        <ChatHeader person={person} />
    </Box>
    <Box>
        <Messages  person={person} />
    </Box>
    <Box
    minWidth={"69vw"}
    overflow={'auto'}
    >
        <Footer />
    </Box>

    </Box>
  )
}

export default ChatBox