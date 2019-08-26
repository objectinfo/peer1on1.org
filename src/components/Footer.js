import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#19193c',
    justifyContent: 'flex-start',
    height: '3.25rem',
  },
  container: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 16,
  },
  links: {
    display: 'flex',
    flexDirections: 'row',
    color: '#fff',
    alignItems: 'center', 
  },
  link_item: {
    padding: '0 1rem',
  }
}));

export default function Footer() {
  const classes = useStyles();
  
    return (
      <footer className={classes.root}>
        <div className={classes.container}>
        <div className={classes.links}>
        <StyledLink className={classes.link_item} activeClassName="active" to="/terms-conditions">
          Terms & Conditions
        </StyledLink>        
        <StyledLink className={classes.link_item} activeClassName="active" to="/privacy-policy">
          Privacy Policy
        </StyledLink>        
        <StyledLink className={classes.link_item} activeClassName="active" to="/contact">
          Contact us
        </StyledLink> 
        </div>
        </div>
      </footer>
    )
  
}
