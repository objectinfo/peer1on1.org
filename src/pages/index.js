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
import heroImg from '../../static/background-16-9.svg'
// import heroImg from '../../content/images/parks-clipart.png'
import ImageCarousel from '../components/CarouselHero'
import styled from 'styled-components';
import EventRegistryForm from '../components/Forms/eventRegistryForm'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import BoxedHeader from '../components/BoxedHeader'
import NewsListingItem, {EventListingItem} from '../components/NewsListItem'
import dateFormat from 'dateformat'
import activityEvents from '../../data/peer1on1_activity'

// Center child divs inside parent div
const ImageCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const BackgroundImgContainer = styled.div`
    background-image: url(${props => props.src});
    min-height: calc(100vh - 6.5rem);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  background: #FFF;
  box-shadow: 0 0 12px #999;
`;

const StyledGridRoot = styled.div`
  flex-grow: 1;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default class Index extends Component {

  getPostList(postEdges) {
    const postList = postEdges
      .filter(postEdge => postEdge.node.frontmatter.template === 'post')
      .map(postEdge => {
        return {
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.fields.date,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          categories: postEdge.node.frontmatter.categories,
        }
      })
    return postList
  }

  sortEvents(events) {
    const filtered = events.filter(u => u.when)

    const sorted = filtered.sort(function (a, b) {
        const dateA = new Date(a.when).getTime()
        const dateB = new Date(b.when).getTime()
        return dateA > dateB ? 1 : -1
    }).reverse()

    return sorted
  }

  render() {
  
    const sortedEvents = this.sortEvents(activityEvents);
    const currentTime = new Date().getTime()
    let upcomingEvents = []
    let archiveEvents = []

    sortedEvents.forEach(element => {
        if (element.when.match(/ongoing/i))
        {
            upcomingEvents.push(element);
            return;
        }
        const eventDate = new Date(element.when).getTime();
        if (eventDate > currentTime)
        {
            upcomingEvents.push(element);
        } else {
            archiveEvents.push(element);
        }
    });

    let hasUpcomingEvent = upcomingEvents.length > 0;

    const latestPostList = this.getPostList(this.props.data.latestPosts.edges)

    const registryForm = <EventRegistryForm open={false} style={{width: '600px'}}/>
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        {/* <BackgroundImgContainer src={heroImg}> */}

        <ImageCarouselContainer >
          <div style={{width: '100%', height: '400px', maxWidth: '1000px'}}>
            <Carousel carousels={carousels} />
            {/* <ImageCarousel carousels={carousels} /> */}
          </div>
        </ImageCarouselContainer> 
        <div className="container">
          <StyledGridRoot>
            <Grid container spacing={2}>
              <Grid item md>
                <Grid container justify="center" spacing={2}>
                  <Grid item sm>
                    <BoxedHeader description="UPCOMING EVENT"></BoxedHeader>
                    {hasUpcomingEvent ? (
                    <EventListingItem activity={upcomingEvents[0]}>
                    </EventListingItem>
                    ) : null}
                  </Grid>
                  <Grid item sm>
                    <BoxedHeader description="LATEST NEWS"></BoxedHeader>
                    {
                      latestPostList.map((post, i) => {
                        let {desc, date, title} = post
                        if (desc === undefined ) desc = post.title
                        // Post date, if available
                        let formattedDate = ''
                        if (date.length > 0) {
                          formattedDate = dateFormat(date, 'fullDate', true).toUpperCase()
                        }
                        return (
                        <NewsListingItem key={i} title={title} link={post.path} date={formattedDate}>
                        </NewsListingItem>
                        )
                      })
                    } 
                  </Grid>
                </Grid>   
             </Grid>
            </Grid>
          </StyledGridRoot>
        </div>
{/*      
        <div className="container front-page" style={{maxWidth: 500, marginTop: 30}}>
          <ActivityCard activity={activity} registryForm={registryForm} />
        </div>
       */}   
        {/* </BackgroundImgContainer> */}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latestPosts: allMarkdownRemark(
      limit: 3
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
