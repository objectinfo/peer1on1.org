import React from 'react'
import { Link } from 'gatsby'
// import { Link } from './Link'
import logo from '../images/logo.png'
import styled from 'styled-components';
import AmazonSmileLogo from '../../static/logos/AmazonSmile.png'
import config from '../../data/SiteConfig'

const StyledLink = styled(Link)`
    font-size: 1.25rem;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Navbar = class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const { scrolled } = this.state

    return (
      <nav
        className={`${scrolled ? 'navbar scroll' : 'navbar'} is-primary  is-fixed-top `}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <div style = {{width: 48, height: 48}}>
              <img src={logo} alt="Peer1on1" />
              </div>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" >
              <StyledLink className="navbar-item" activeClassName="active" to="/about">
                About
              </StyledLink>
              <StyledLink className="navbar-item" activeClassName="active" to="/events">
                Events
              </StyledLink>
              <StyledLink className="navbar-item" activeClassName="active" to="/blog">
                Gallery
              </StyledLink>
              <StyledLink className="navbar-item" activeClassName="active" to="/team">
                Team
              </StyledLink>
              <StyledLink className="navbar-item" activeClassName="active" to="/contact">
                Contact
              </StyledLink>
            </div>
            <div className="navbar-end has-text-centered">
            <a href="https://peer1on1.wordpress.com"
              className="navbar-item tooltip is-tooltip-bottom is-tooltip-info" style={{paddingRight: 20}}
              data-tooltip="Visit the old website"
              >
              Old Website
            </a>
            <a href={config.amazonSmileUrl} target="_blank"
              className="navbar-item tooltip is-tooltip-bottom is-tooltip-info" style={{padding: 0}}
              data-tooltip="You shop, Amazon gives"
              >
              <img src={AmazonSmileLogo} style={{width: 150, maxHeight: 50, marginBottom: 0}} alt="AmazonSmile" />
            </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
