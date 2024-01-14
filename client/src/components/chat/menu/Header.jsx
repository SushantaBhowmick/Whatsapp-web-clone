import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box } from '@mui/material'
import {Chat as MessageIcon,MoreVert,TimerOutlined} from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'


//components



const Header = () => {
    const {account} = useContext(AccountContext)
  return (
    <Box 
    height={'44px'} 
    bgcolor={"#ededed"}
    padding={'8px 16px'}
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}
    >
        <img
        style={{height:'40px', width:'40px',borderRadius:'50%'}}
         src={account.picture} alt="dp" />

         <Box display={'flex'}>
            <TimerOutlined sx={{  padding:'5px 10px'}}/>
            <MessageIcon  sx={{  padding:'5px'}}/>
            <HeaderMenu  sx={{  padding:'5px'}} />
         </Box>
    </Box>
  )
}

export default Header