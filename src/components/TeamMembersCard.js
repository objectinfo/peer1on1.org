import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeamMemberCard from './TeamMemberCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
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
    <div className="flex flex-wrap justify-center">
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
          <div key={member.name} className="px-4">
          <TeamMemberCard 
             name={member.name} picture={member.avatar_img} teamTitle={member.position} introduction={member.introduction}>

          </TeamMemberCard>
          </div>
        );
      })
    }
    </div>
  );
}

export default function TeamMembersCard(props) {
  const {teamMembers} = props;
  return (
    <div>
    <div style={{marginTop: '1rem', marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">Board Members</p>
      <BranchMembers members={teamMembers['board']} />
    </div>
    <div style={{marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">Cypress Branch</p>
      <BranchMembers members={teamMembers['cypress']} />
    </div>
    <div style={{marginTop: '3rem', marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">San Gabriel Branch</p>
      <BranchMembers members={teamMembers['sangabriel']} />
    </div>
    <div style={{marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">Cerritos Branch</p>
      <BranchMembers members={teamMembers['cerritos']} />
    </div>    
    <div style={{marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">Beach Branch</p>
      <BranchMembers members={teamMembers['beach']} />
    </div>     
    <div style={{marginBottom: '3rem'}}>
      <p className="mb-2 font-serif text-2xl text-gray-800 text-center">Irvine Branch</p>
      <BranchMembers members={teamMembers['irvine']} />
    </div>     
    </div>
  );
}
