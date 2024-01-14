import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import Header from './Header'
import { AccountContext } from '../../../context/AccountProvider'
import Search from './Search'


const Menu = () => {

    const {account} = useContext(AccountContext)
    const [text, setText] = useState('');

  return (
    <Box >
        <Header />
        <Search setText={setText}  />
    </Box>
  )
}

export default Menu