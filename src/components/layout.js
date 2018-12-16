import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'UX Thailand Conference' },
            { name: 'keywords', content: 'uxth, ux thailand' },
          ]}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property='og:title' content='UX Thailand Conference' />
          <meta property='og:image' content='https://uxth.co/images/uxth-og-image.png' />
          <html lang="en" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
