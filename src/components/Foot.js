import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import mq from '../../utils/media-query'

const FootWrapper = styled.div`
  background-color: #282828;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mq.s} {
    flex-direction: column;
    align-items: center;
  }
`

const ImageLogo = styled.img`
  height: 55px;
  ${mq.l} {
    height: 32px;
  }
`

const PoweredBy = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: var(--color_grey_super_light);
  align-self: center;
`

const LogoWrapper = styled.div`
  height: 55px;
  ${mq.l} {
    height: 32px;
  }
`

class Foot extends React.Component {
  logoURLWithPrefix = name => `/images/${name}`

  render() {
    return (
      <FootWrapper>
        <LogoWrapper>
          <Link to="/">
            <ImageLogo
              src={this.logoURLWithPrefix('logo_UXO-white.svg')}
              alt=""
            />
          </Link>
        </LogoWrapper>
        <PoweredBy>Serve and inspire by UX Thailand, 2018</PoweredBy>
      </FootWrapper>
    )
  }
}

export default Foot
