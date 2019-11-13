import React from 'react';
import { NewsListItemContainer, NewsListingItemTitle, NewsListItemSubTitle, NewsListItemDate } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EventFlyerForm from '../Forms/eventFlyerForm'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
  button: {
    margin: theme.spacing(1),
    right: 0,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
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

export function EventListingItem (props) {
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

   return (
     <NewsListItemContainer className={classes.root}>
       <NewsListingItemTitle >  
        {props.activity.eventTitle}
       </NewsListingItemTitle>
       <NewsListItemSubTitle>{props.activity.where}</NewsListItemSubTitle>
       <NewsListItemDate>{props.activity.when}</NewsListItemDate>
       <EventFlyerForm flyerImage={props.activity.flyerImage}></EventFlyerForm>
     </NewsListItemContainer>
  );
};