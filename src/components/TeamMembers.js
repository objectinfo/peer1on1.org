import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Grid from '@material-ui/core/Grid';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  image: {
    width: 40,
    height: 40,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function BranchMembers(props) {
  const {members} = props;
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    {
      members.filter((member) => {
        return member.is_active === true;
        }).map((member, i) => {
        const panelId = `panel${i}`;
        let shortIntro = '';
        if (member.introduction) {
          shortIntro= member.introduction.slice(0, 40) + '...';
        }
        // expanded={expanded === {panelId}} onChange={handleChange(panelId)}
        return (
          <ExpansionPanel key={member.name}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image} border={0}>
                    <img className={classes.img} alt="complex" src={member.avatar_img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={3} container style={{ alignItems: 'center'}} >
                    
                      <Typography variant="subtitle1">
                        {member.name}
                      </Typography>
                    
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {member.position}
                      </Typography>
{/* 
                      <Typography variant="body2" gutterBottom>
                        {shortIntro}
                      </Typography>
 */}                    
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>              
            </ExpansionPanelSummary>
            
            <ExpansionPanelDetails>
              <Typography
                 style={{whiteSpace: 'pre-line'}}
              >
                {member.introduction}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })
    }
    </div>
  );
}

export default function TeamMembers(props) {
  const {teamMembers} = props;
  return (
    <div>
    <div style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">Board Members</h3>
      <BranchMembers members={teamMembers['board']} />
    </div>
    <div style={{marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">Cypress Branch</h3>
      <BranchMembers members={teamMembers['cypress']} />
    </div>
    <div style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">San Gabriel Branch</h3>
      <BranchMembers members={teamMembers['sangabriel']} />
    </div>
    <div style={{marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">Cerritos Branch</h3>
      <BranchMembers members={teamMembers['cerritos']} />
    </div>    
    <div style={{marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">Beach Branch</h3>
      <BranchMembers members={teamMembers['beach']} />
    </div>     
    <div style={{marginBottom: '3rem'}}>
      <h3 className="mb-2 font-serif text-2xl text-gray-800 text-center">Irvine Branch</h3>
      <BranchMembers members={teamMembers['irvine']} />
    </div>     
    </div>
  );
}
