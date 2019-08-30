import React, { Component } from 'react'
import dateFormat from 'dateformat'
import Link from 'gatsby-link'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CoverPhoto} from './ActivityCard/style'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    maxHeight: 128,

  },
  card: {
    padding: 0, // theme.spacing(1),
    maxWidth: 320,
    minWidth: 200,
    height: '100%',
  },
  card_meta: {
    padding: theme.spacing(1),
  },
  card_media: {
    height: 140,
  },
}));

export default function BlogRollCard(props) {
 
  function sortPosts(updates) {
    const filtered = updates.filter(u => u.date)
  
    const sorted = filtered.sort(function (a, b) {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateA > dateB ? 1 : -1
    }).reverse()
  
    return sorted
  }
  
  function getPostList(props) {
    const { postEdges } = props
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

  const classes = useStyles();

    const {
      small
    } = props
  
    const postList = getPostList(props)
    // filter out posts without a valid date
    // and also sort them reverse chron
    let sortedPostList = postList; // sortPosts(postList);
    if (small === true) {
      sortedPostList = sortedPostList.slice(0, 3)
    }

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
      {
        sortedPostList.map((post, i) => {
          let {
            desc,
            date,
            title
          } = post

          if (desc === undefined ) desc = post.title

          // Post date, if available
          let formattedDate = ''
          if (date.length > 0) {
            console.log(date)
            formattedDate = dateFormat(date, 'fullDate', true).toUpperCase()
          }

          let thumbnail
          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fluid
          }

          let link_flag = true

          if (post.path.indexOf("http") !== -1) {
            link_flag = false
          }
          console.log("link_flag: ", link_flag, post.path)

          return (
            <Grid key={title} item>
            <Paper className={classes.card}>
            <CoverPhoto src={thumbnail.src} />
          <Grid className={classes.card_meta} container direction="column" spacing={2}>
            <Grid item xs >
              <Typography gutterBottom variant="h5" color="primary">
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {formattedDate}
              </Typography>
            </Grid>            
            <Grid item>
              <Typography variant="body1" color="textSecondary" component="p">
                {post.excerpt}
              </Typography>
            </Grid>
            <Grid item>
              <Button size="small" color="primary">
              <Link to={post.path} key={post.title}>Read More</Link>
              </Button>              
            </Grid>
          </Grid> 
          </Paper>
          </Grid>
          )
        })
      }
          </Grid>
        </Grid>
      </Grid>
    )
}
