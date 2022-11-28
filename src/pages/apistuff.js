import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ApiStuff = () => {
  return (
    <Layout pageTitle="API Stuff">
      <p>placeholder</p>
      <p>{`${process.env.API_KEY}`}</p>
      <p>{`${process.env.GATSBY_API_URL}`}</p>
    </Layout>
  )
}

export const Head = () => <Seo title="API Stuff" />

export default ApiStuff