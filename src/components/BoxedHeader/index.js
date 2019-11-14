import React from 'react';
import { BoxedHeaderContainer, BoxedHeaderHeading2 } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function BoxedHeader (props) {
  const classes = useStyles();

   return (
     <BoxedHeaderContainer className={classes.root}>
       <BoxedHeaderHeading2 >
         {props.description}
       </BoxedHeaderHeading2>
     </BoxedHeaderContainer>
  );
};