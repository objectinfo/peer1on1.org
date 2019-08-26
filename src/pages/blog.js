import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import BlogRollCard from '../components/BlogRollCard'
import NewsletterForm from '../components/NewsletterForm'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
 import {ThemeProvider} from 'styled-components';
 import theme from '../components/shared/theme';
 import PostListing from '../components/PostListing/PostListing';

export default class BlogPage extends Component {

  render() {
    const { data } = this.props
    const latestPostEdges = data.posts.edges

    return (
      <Layout>
        <Helmet title={`Gallery & Posts – ${config.siteTitle}`} />
        <SEO />
        <div className="container" style={{marginTop: '20px'}}>
          <h2>Gallery & Posts</h2>
          <BlogRollCard small={true} postEdges={latestPostEdges} /> 
{/* 
        <ThemeProvider theme={theme}>
          <PostListing
            postEdges={latestPostEdges}
          />
        </ThemeProvider>

        <section className="newsletter-section section">
            <h2>Join the Newsletter</h2>
            <p>
              Enter your email address to follow our blog and receive notifications of new posts by email.
            </p>
            <NewsletterForm />
        </section> */}
        </div>

      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                },
                fluid(maxHeight: 150) {
                  ...GatsbyImageSharpFluid
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
