import React from 'react';
import { NewsListItemContainer, NewsListingItemTitle, NewsListItemDate } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function NewsListingItem (props) {
  const classes = useStyles();

   return (
     <NewsListItemContainer className={classes.root}>
       <NewsListingItemTitle >  
         <a href={props.link}>{props.title}</a>
       </NewsListingItemTitle>
       <NewsListItemDate>{props.date}</NewsListItemDate>
     </NewsListItemContainer>
  );
};