import { AttachFile, EmojiEmotionsOutlined,Mic, Send } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box
    display={'flex'}
    alignItems={'center'}
    height={'7vh'}
    bgcolor={'#ededed'}
    width={'100%'}
    padding={'0 15px'}
    >
           <Box marginRight={"10px"} display={'flex'} gap={"10px"}>
           <EmojiEmotionsOutlined sx={{color:"gray"}}/>
            <AttachFile sx={{transform:'rotate(40deg)',color:"gray"}}/>
           </Box>
            <Box
             sx={{
                    borderRadius:"18px",
                    bgcolor:"#FFFFFF",
                    // width:"calc(94%-100px)"
                    width:'58vw'  , overflowX:'auto'             }}
            >
                <InputBase
               sx={{
                width:"100%",
                padding:"20px",
                paddingLeft:"25px",
                fontSize:'14px',
                height:'20px'
               }}
                placeholder='Type a messege'
                 />
            </Box>
           <Box marginLeft={"10px"} display={'flex'} gap={"10px"}>
           <Mic sx={{color:"gray"}} />
            <Send sx={{color:"gray"}}/>
           </Box>
    </Box>
  )
}

export default Footer