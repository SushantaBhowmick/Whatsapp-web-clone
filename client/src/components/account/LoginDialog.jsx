import { Box, Dialog, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../../constant/data'
import {GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import {useContext} from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../services/api'


const dialogStyle={
    height:"96%",
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);


    const onLoginSuccess=async(res)=>{
        const decode = jwtDecode(res.credential)
        setAccount(decode);
        await addUser(decode)
    }
    const onLoginError=(res)=>{
        console.log(res)
       
    }

  return (
    <Box>
        <Dialog
        PaperProps={{sx:dialogStyle}}
         open={true}
         hideBackdrop={true}
         >
         
            <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-evenly'}
            paddingTop={'66px'}
            >
                <Box>
                    <Typography fontSize={30} color={'#525252'} fontWeight={200}
                    fontFamily={'inherit'} marginBottom={'25px'}
                    >Use WhatsApp on your computer</Typography>
                    <List >
                        <ListItem sx={{padding:0,marginTop:'15px',fontSize:'18px', lineHeight:"28px", color:"#4a4a4a"}}>
                        1. Open WhatsApp on your phone
                        </ListItem>
                        <ListItem sx={{padding:0,marginTop:'15px',fontSize:'18px', lineHeight:"28px", color:"#4a4a4a"}}>
                        2. Tap on Link a device
                        </ListItem>
                        <ListItem sx={{padding:0,marginTop:'15px',fontSize:'18px', lineHeight:"28px", color:"#4a4a4a"}}>
                        3. Tap Menu Settings and select Linked devices
                        </ListItem>
                        <ListItem sx={{padding:0,marginTop:'15px',fontSize:'18px', lineHeight:"28px", color:"#4a4a4a"}}>
                        4. Point your phone to this screen to capture the QR code
                        </ListItem>
                    </List>
                </Box>

                <Box>
                    <Box>
                    <img style={{height:'264px',width:'264px'}} src={qrCodeImage} alt="" />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                         />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    </Box>
  )
}

export default LoginDialog