import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import styled from 'styled-components';
import ServiceItem from '../components/ServiceItem';
import aptitudelogo from '../images/aptitude.jpg';
import peer1on1Logo from '../images/logo.png';

// Center child divs inside parent div
const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Service – ${config.siteTitle}`} />
        <div class="flex items-center justify-center">
        <div className="grid grid-cols-1 justify-center max-w-screen-lg">
         <ServiceItem 
             logoPicture={peer1on1Logo} 
             title="Zoom Friend 1 to 1" 
             introduction=""
             serviceLink=""
          >
          </ServiceItem>

          <ServiceItem 
             logoPicture={aptitudelogo} 
             title="Aptitude" 
             introduction="Aptitude is an app that helps special needs children to achieve a better lifestyle through exercise videos, recipes and health related articles. This app is created in support of a non-profit organization: autism peer 1 on 1."
             serviceLink="https://oneaptitude.weebly.com"
          >
          </ServiceItem>

          <ServiceItem 
             logoPicture={peer1on1Logo} 
             title="Arts and Crafts Social" 
             introduction=""
             serviceLink=""
          >
          </ServiceItem>

          <ServiceItem 
             logoPicture={peer1on1Logo} 
             title="Speech Training with Peers" 
             introduction=""
             serviceLink=""
          >
          </ServiceItem>
        </div>
        </div>
      </Layout>
    )
  }
}
