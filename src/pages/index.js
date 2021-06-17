import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
      alt="Me sitting on a bench with a friend, throwing a peace sign at a sheep"
      src="../images/1623940352219.jpg"
      />
    </Layout>
  )
}

export default IndexPage