import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { Box } from '@mui/material'

const layout = (props) => {
  return (
    <Box className={props.class} >
        <Header/>
        {props.children}
        <Footer/>
      
    </Box>
  )
}

export default layout