import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate } from '../utils/global'
// import '../styles/post.scss'
import styled from 'styled-components';

const Heading = styled.h1`
font-size: 48px;
line-height: 72px;
letter-spacing: -1.2px;
font-weight: 900;
color: rgb(251, 193, 0);
text-align: center;
font-family: Roboto;
margin: 20px 0px 10px;
`;

export default class PostTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      comments: [],
    }
  }

  async componentDidMount() {
    const { slug } = this.props.pageContext
  }

  render() {
    const { comments, error } = this.state
    const { slug } = this.props.pageContext
    const commentSlug = slug.replace(/\\|\//g, '')
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

/*     if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    } */

    const date = formatDate(post.date)

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container" style={{maxWidth: 800}}>
          <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
            {thumbnail ? <Img fixed={post.thumbnail.childImageSharp.fixed} /> : null}
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Heading>{post.title}</Heading>
              <h4 style={{textAlign: 'center'}}>{date}</h4>
              <div className="post-meta"> 
              </div>
            </div>
          </header>

          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </article>

      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }          
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
