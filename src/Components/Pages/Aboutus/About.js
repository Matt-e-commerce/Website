import React from 'react'
import AboutUsHeader from '../Aboutus/AboutUs/AboutUsHeader'
import WhyUs from '../Aboutus/AboutUs/WhyUs'
import HowWeWork from '../Aboutus/AboutUs/HowWework/HowWeWork'
import TrustedPartners from '../Aboutus/AboutUs/TrustedPartners'
import Layout from '../../Layout/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <WhyUs />
      <HowWeWork />
      <TrustedPartners />
    </Layout>
  )
}

export default AboutPage
