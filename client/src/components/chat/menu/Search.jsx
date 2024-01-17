import React from 'react'
import {Search as SearchIcon} from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'


const Search = ({setText}) => {

  return (
    
   <Box
   bgcolor={"#fff"}
   height={"45px"}
   display={'flex'}
   alignItems={'center'}
   borderBottom={'1px solid #F2F2F2'}
   >
    <Box
    position={'relative'}
    borderRadius={'10px'}
    bgcolor={'#f0f2f5'}
    margin={'0 13px'}
    width='100%'
    >
        <Box
        color={'#919191'}
        padding={'8px'}
        height={'100%'}
        position={'absolute'}
        >
          <SearchIcon  fontSize='small'/>
        </Box>
        <InputBase
        sx={{
          width:'100%',
          padding:'16px',
          paddingLeft:'65px',
          fontSize:'14px',
          height:'18px'
        }}
          placeholder="Search or start new chat"
          onChange={(e) => setText(e.target.value)}
         />
    </Box>
   </Box>
  )
}

export default Search