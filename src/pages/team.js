import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import TeamMembers from '../components/TeamMembers'
import config from '../../data/SiteConfig'
import teammembers from '../../data/teammembers'
import styled from 'styled-components';

// Center child divs inside parent div
const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Team Leaderships – ${config.siteTitle}`} />
        <div className="container">
          <TeamContainer>
            <TeamMembers teamMembers={teammembers}/>
          </TeamContainer>
        </div>
      </Layout>
    )
  }
}
