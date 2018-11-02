import React from 'react'

import Layout from '../components/layout'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Agenda from '../components/Agenda'
import Price from '../components/Price'
import Foot from '../components/Foot'

const IndexPage = () => (
  <Layout>
    <Section1 id="section1" />
    <Section2 id="conferences" />
    <Section3 id="section3" />
    <Section4 id="vision" />
    <Section5 id="sponsor" />
    <Section6 id="section6" />
    <Agenda id="speakers" />
    <Price id="ticket" />
    <Foot />
  </Layout>
)

export default IndexPage
