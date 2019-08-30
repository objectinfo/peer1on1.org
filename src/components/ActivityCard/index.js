import React from 'react';
import { CommunityAvatar } from '../Avatar';
import { ActivityContainer, CoverPhoto, ActivityAvatarContainer } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {Timeline, TimelineEvent} from 'react-event-timeline'

const useStyles = makeStyles(theme => ({
  grid_root: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 500,
  },
  eventTitle: {
    textAlign: 'center',
    marginTop: -20,
    paddingBottom: 20,
  },
  firstColumn: {
    textAlign: 'left',
    paddingLeft: 12,
  },
  secondColumn: {
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'pre-line',
  },
  timeline_header_extra: {
    backgroundColor: '#00d1b2',
  },
  timeline_item_extra: {
    marginBottom: '0.5rem',
  },
}));

export default function ActivityCard (props) {
  const classes = useStyles();

  function FormRow({title, desc}) {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.firstColumn}>
            {title ? title : ''}
          </Typography>          
        </Grid>
        <Grid item xs={9} className={classes.secondColumn}>
          <Typography style={{whiteSpace: 'pre-line'}}>
            {desc ? desc : ''}
          </Typography>            
        </Grid>
      </React.Fragment>
    );
  }

  const { coverPhoto, profilePhoto, activity, expandTimeline } = props;

  if (!activity) {
    return (<div></div>)
  }
  // Check if there is timeline data
  let hasTimeline = false;
  if (Array.isArray(activity.timeline) && activity.timeline.length > 0)
  {
    hasTimeline = true;
  }

  let doExpandTimeline = expandTimeline && hasTimeline

  return (
  <Paper className={classes.paper}>
    <ActivityContainer >
      <CoverPhoto src={coverPhoto} />
 
      <ActivityAvatarContainer>
        <CommunityAvatar
          showHoverProfile={false}
          size={60}
          profilePhoto={profilePhoto}
        />
      </ActivityAvatarContainer>

      <Typography variant="h4" 
        className={classes.eventTitle}>
        {activity.eventTitle || 'Event Title'}
      </Typography>

      <div className={classes.grid_root}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <FormRow title="When:" desc={activity.when} />
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <FormRow title="Location:" desc={activity.where} />
          </Grid>
        </Grid>
      </div>

      <ExpansionPanel defaultExpanded={doExpandTimeline}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Grid container spacing={2}>
            <Grid item xs={3} container style={{ alignItems: 'center'}} >   
              <Typography variant="h6">
                Time:
              </Typography>   
            </Grid>
            <Grid item xs={9} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  {activity.time}
                  </Typography>                 
                </Grid>
              </Grid>
            </Grid>
          </Grid>              
        </ExpansionPanelSummary>
        { hasTimeline &&
        <ExpansionPanelDetails>
          <div className="timeline">
            <header className={`timeline-header ${classes.timeline_header_extra}`}>
              <span className="tag is-medium is-primary">Start</span>
            </header>
            {
            activity.timeline.map((tItem, index) => (
            <div className="timeline-item" key={`timeline-item-${index}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className={`heading ${classes.timeline_item_extra}`}>{tItem.time}</p>
                <p className={classes.timeline_item_extra}>{tItem.title}</p>
              </div>
            </div>
            ))
            }
            <div className={`timeline-header ${classes.timeline_header_extra}`}>
              <span className="tag is-medium is-primary">End</span>
            </div>
          </div>
        </ExpansionPanelDetails>
        }
      </ExpansionPanel>
    </ActivityContainer>
  </Paper>
  );
};