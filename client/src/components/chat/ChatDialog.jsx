import { Box, Dialog } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox';
import { AccountContext } from '../../context/AccountProvider';



const dialogStyle={
    height:"95%",
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
    borderRadius:0
}

const ChatDialog = () => {

    const {person} = useContext(AccountContext)

  return (
   <Dialog
    PaperProps={{sx:dialogStyle}}
         open={true}
         hideBackdrop={true}
         maxWidth={'md'}
   >
    <Box display={'grid'} gridTemplateColumns={"3.5fr 8.5fr"}>
    {/* Left */}
        <Box  minWidth={'300px'}
        height={'100%'}
        >
            <Menu />
        </Box>
        
    {/* Right */}
        <Box
        borderLeft={'1px solid rgba(0, 0, 0, 0.14)'}
        minWidth={'400px'}
        >
            
            
            {Object.keys(person).length?<ChatBox/>:<EmptyChat />  }
        </Box>
    </Box>
   </Dialog>
  )
}

export default ChatDialog