import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import favicon from '../images/favicon.png'
import '../styles/main.scss'
import '../styles/navbar.sass'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';
import heroImg from '../../static/background-16-9.svg'

const BackgroundImgContainer = styled.div`
    background-image: url(${props => props.src});
    min-height: calc(100vh - 6.5rem);
`;

export default class MainLayout extends Component {

  render() {

    const { children } = this.props

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: 'has-navbar-fixed-top'
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        {/* <Navigation menuLinks={config.menuLinks} /> */}
        <Navbar  />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </>
    )
  }
}
