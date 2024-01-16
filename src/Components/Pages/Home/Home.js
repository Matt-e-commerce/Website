import React from 'react'
import { Typography } from '@mui/material'
import Slider from '../../Slidercomp/Slider'
import Salecomp from '../../Salecomp/Sale'
import Tabcomp from '../../Tabcom/Tab'
import Featured from '../../Featuredcategory/Featuredcategory'
import Footerimage from '../../Footerimage/Footerimage'
import Reviewscomp from '../../Reviews/Saction'
import Layout from '../../Layout/Layout'





const Home = () => {
  return (
    <div>
      <Layout >
         <Slider/>
        <Salecomp />
        <Tabcomp/>
        <Featured/>
        <Footerimage />
        <Reviewscomp/>
        </Layout>
  


    </div>
  )
}

export default Home
