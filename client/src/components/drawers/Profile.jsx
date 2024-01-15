import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'


const Profile = () => {

    const {account} = useContext(AccountContext)

  return (
    <Box>
    {/* first */}
        <Box
        display={'flex'}
        justifyContent={'center'}
        >
    <img src={account.picture} alt="dp"
    style={{width:180,height:180,borderRadius:'50%',padding:'25px 0'}}
     />
        </Box>

        {/* second */}
        <Box
        bgcolor={'#FFFFFF'}
        padding={'12px 30px 2px'}
        boxShadow={'0 1px 3px rgba(0, 0, 0, 0.08)'}
        >
            <Typography
            fontSize={'13px'}
            color={' #009688'}
            fontWeight={200}
            >Your Name</Typography>
            <Typography margin={'14px 0'} color={'#4A4A4A'}>{account.name}</Typography>
        </Box>

{/* Third */}
        <Box
        padding={'15px 20px 28px 30px'}
        >
        <Typography color={'#8696a0'} fontSize={'13px'}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </Box>

{/* 4th */}
        <Box
        bgcolor={'#FFFFFF'}
        padding={'12px 30px 2px'}
        boxShadow={'0 1px 3px rgba(0, 0, 0, 0.08)'}
        >
            <Typography
            fontSize={'13px'}
            color={' #009688'}
            fontWeight={200}
            >About</Typography>
            <Typography margin={'14px 0'} color={'#4A4A4A'}>Eat! Sleep! Code! Repeat</Typography>
        </Box>
    </Box>
  )
}

export default Profile