import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import Header from './Header'
import { AccountContext } from '../../../context/AccountProvider'
import Search from './Search'
import Conversations from './Conversations'


const Menu = () => {

    // const {account} = useContext(AccountContext)
    const [text, setText] = useState('');

  return (
    <Box >
        <Header />
        <Search setText={setText}  />
        <Conversations />
    </Box>
  )
}

export default Menu