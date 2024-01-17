import { Box } from '@mui/material'
import React from 'react'

const Messages = () => {
    const bgImage='url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' 

  return (
    <Box
    sx={{backgroundImage:bgImage}}
    >
      <Box
    height={'80vh'}
    sx={{overflowY:'auto'}}
      >

      </Box>
    </Box>
  )
}

export default Messages