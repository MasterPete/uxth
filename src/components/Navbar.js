import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import mq from '../../utils/media-query'

const Nav = styled.nav`
  z-index: 9999;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 40px;
  align-items: center;
  transition: all 0.3s ease;

  font-size: 14px;
  font-weight: 600;
  color: var(--color_almost_white);
  a {
    color: var(--color_almost_white);
  }
  ${props =>
    props.white &&
    `
    background: rgba(255,255,255,0.95);
    color: var(--color_black);
    a {
      color: var(--color_black);
    }
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  `};

  ${mq.s} {
    padding: 20px var(--padding_size);
  }
`
const LogoWrapper = styled.div`
  height: 55px;
  ${mq.l} {
    height: 32px;
  }
`
const Ul = styled.ul`
  list-style-type: none;
  display: flex;

  ${mq.l} {
    display: none;
  }
`
const Li = styled.li`
  padding: 4px 8px;
  margin: 0 20px;
`

const ImageLogo = styled.img`
  height: 55px;
  ${mq.l} {
    height: 32px;
  }
`
const WhiteSpace = styled.div`
  max-width: 200px;
  width: 100%;
`

const MenuList = styled.ul`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;

  transition: all 0.3s ease;
  opacity: 1;
  ${props =>
    !props.show &&
    `
    opacity: 0;
    visibility: hidden;
  `};
`
const MenuItem = styled.li`
  line-height: 3.4;
  padding: 0 var(--padding_size);
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 4px;
  a {
    color: var(--color_black);
  }
  &:hover {
    background: var(--color_grey_super_light);
  }
`
function MenuPopUp(props) {
  return (
    <MenuList {...props}>
      <MenuItem>
        <Link to="#conferences">Conferences</Link>
      </MenuItem>
      <MenuItem>
        <Link to="#vision">Vision</Link>
      </MenuItem>
      <MenuItem>
        <Link to="#sponsor">Sponsors</Link>
      </MenuItem>
      <MenuItem>
        <Link to="#agenda">Agenda</Link>
      </MenuItem>
      <MenuItem>
        <Link to="#speakers">Speakers</Link>
      </MenuItem>
      <MenuItem>
        <Link to="#ticket">Ticket</Link>
      </MenuItem>
    </MenuList>
  )
}
const MenuButtonWrapper = styled.button`
  display: none;
  ${mq.l} {
    display: block;
    background: transparent;
    border: 0;
    margin-left: auto;
    color: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
  }
`
class Menu extends React.Component {
  state = {
    showMenu: false,
  }

  handleClick = () => {
    this.setState(({ showMenu }) => ({ showMenu: !showMenu }))
  }

  render() {
    const { showMenu } = this.state
    return (
      <>
        <MenuButtonWrapper onClick={this.handleClick}>Menu</MenuButtonWrapper>
        <MenuPopUp show={showMenu} />
      </>
    )
  }
}

class Navbar extends React.Component {
  state = {
    offset: 0,
  }

  handleScroll = () => {
    this.setState({ offset: window.pageYOffset })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  logoURLWithPrefix = name => `/images/${name}`

  render() {
    const { offset } = this.state
    const isNavbarWhite = offset >= 150

    const logoURL = isNavbarWhite ? 'logo_UXO.svg' : 'logo_UXO-white.svg'

    return (
      <Nav white={isNavbarWhite}>
        <LogoWrapper>
          <Link to="/">
            <ImageLogo src={this.logoURLWithPrefix(logoURL)} alt="" />
          </Link>
        </LogoWrapper>
        <WhiteSpace />
        <Ul>
          <Li>
            <Link to="#conferences">Conferences</Link>
          </Li>
          <Li>
            <Link to="#vision">Vision</Link>
          </Li>
          <Li>
            <Link to="#sponsor">Sponsors</Link>
          </Li>
          <Li>
            <Link to="#agenda">Agenda</Link>
          </Li>
          <Li>
            <Link to="#speakers">Speakers</Link>
          </Li>
          <Li>
            <Link to="#ticket">Ticket</Link>
          </Li>
        </Ul>
        <Menu />
      </Nav>
    )
  }
}

export default Navbar
