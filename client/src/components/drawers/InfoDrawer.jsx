import { Box, Drawer, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import React from 'react'
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 18,
    height: '95%',
    width: '28.4%',
    boxShadow: 'none',
    minWidth:'300px'
}


const InfoDrawer = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <>
        <Box>
        <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      sx={{zIndex:1500}}
    >

        <Box
        bgcolor={'#008069'}
        height={'107px'}
        color={'#fff'}
        display={'flex'}
        // marginTop={'auto'}
        alignItems={'end'}
        >
        <ArrowBack sx={{fontWeight:600,padding:'15px'}} onClick={()=>setOpen(false)} />
        <Typography fontSize={'18px'} padding='12px'>
            Profile
        </Typography>
        </Box>

        <Box
        bgcolor={'#ededed'}
        height={'85%'}
        overflow={'hidden'}
        >
            <Profile />
        </Box>

    </Drawer>
        </Box>
    </>
  )
}

export default InfoDrawer