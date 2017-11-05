import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'

import { rhythm } from '../utils/typography'
import { SiteLogo } from '../components'
import styled from 'styled-components'

import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const LogoWrapper = styled.div`
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};

  ${MOBILE_MEDIA_QUERY} {
    text-align: center;
  }
`

const Template = ({ children, data, location }) => {
  // let rootPath = `/`
  // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
  //   rootPath = __PATH_PREFIX__ + `/`
  // }

  const siteTitle = data.site.siteMetadata.title

  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(3)}`,
      }}
    >
      <Helmet title={siteTitle} />
      <LogoWrapper>
        <SiteLogo to="/" />
      </LogoWrapper>

      {children()}
    </Container>
  )
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
