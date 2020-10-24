import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    TeamContainer, TeamContainerBack, TeamPictureContainer, TeamPictureImg, TeamContent,
    TeamSocial, TeamSocialItem, TeamSocialItemLink
 } from './style';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

 import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
}));

export default function TeamMemberCard (props) {
    const classes = useStyles();
    const { name, picture, teamTitle, introduction } = props;
    const [isFlipped, setFliped] = React.useState(false);
    const handleClick  = () => {
        setFliped(prevState => !prevState);
    };
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <TeamContainer className="shadow-lg rounded-lg">
            <TeamPictureContainer>
                <TeamPictureImg src={picture}/>
            </TeamPictureContainer>
            <TeamContent>
                <p className="font-serif text-2xl text-gray-800 text-center">{name}</p>
                <h4>{teamTitle}</h4>
            </TeamContent>
            <div className="flex w-full absolute bottom-0 justify-center pb-1">
               <div className="m-auto">
               <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 hover:border-transparent rounded"
                  onClick={handleClick}  
               >
                   <FontAwesomeIcon icon={faArrowRight} className="pr-0"/>
                  <span className="pl-2">Introduction</span>
               </button>
               </div>
            </div>             

            <TeamSocial>

            </TeamSocial>
        </TeamContainer>
        <TeamContainerBack className="shadow-lg rounded-lg">              
           <div className="overflow-auto h-64 px-3">
              <p>{introduction}</p>
           </div>
           <div className="flex w-full absolute bottom-0 justify-center pb-1">
               <div className="m-auto">
               <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 hover:border-transparent rounded"
                  onClick={handleClick}  
               >
                  <FontAwesomeIcon icon={faArrowLeft} className="pr-0"/>
                  <span className="pl-2">Go back</span>
               </button>
               </div>
           </div>            
        </TeamContainerBack>
        </ReactCardFlip>
    );
};
