import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ActivityCard from '../components/ActivityCard'
import Carousel from '../components/Carousel'
import BlogRollCard from '../components/BlogRollCard'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import carousels from '../../data/carousels'
import coverPhoto from '../../content/images/cover-blue.svg'
import peer1on1logo from '../images/logo.png'
import {SidebarSection} from '../components/ActivityCard/style'
import heroImg from '../../content/images/background-16-9.svg'
// import heroImg from '../../content/images/parks-clipart.png'


export default class Index extends Component {
  render() {
    const { data } = this.props
    const activity = {
      coverPhoto: coverPhoto,
      profilePhoto: peer1on1logo
    }

    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
{/*  
        <div className="container front-page" style={{maxWidth: 500, marginTop: 30}}>
          <ActivityCard activity={activity} />
        </div>
*/}
      <div className="hero is-fullheight has-background">
{/*         <img className="hero-background is-transparent"
             src={heroImg}
        ></img> */}
        <div className="hero-body" style={{height: 'calc( 100vh - 6.5rem )'}}>
          <Carousel carousels={carousels} />
        </div>
      </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
