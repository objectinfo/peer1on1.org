import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import TeamMembers from '../components/TeamMembers'
import config from '../../data/SiteConfig'
import teammembers from '../../data/teammembers'
import TeamMembersCard from '../components/TeamMembersCard.js'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
    max-width: 960px;    
`;

// Center child divs inside parent div
const TeamContainer = styled.div`
    max-width: 960px;
    justify-content: center;
    
`;

export default function ContactPage (props) {
  const [selectedType, setselectedType] = React.useState('card');
  const handleClick  = (key) => {
    setselectedType(key);
    console.log(key);
  };  

    return (
      <Layout>
        <Helmet title={`Team Leaderships – ${config.siteTitle}`} />
        <div className="container items-center">
        <ButtonContainer className="flex justify-end m-auto">
        <div className="flex justify-self-end m-2 pt-3">
            <button 
            buttonKey="card"
            onClick={() => handleClick("card")}
            className={`text-base  rounded-r-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        border duration-200 ease-in-out 
        border-teal-600 transition ` +  (selectedType === 'card' ? 'bg-teal-700 text-teal-100 outline-none' : 'bg-teal-100 text-teal-700')
            }>
                <div className="flex leading-5">
                  <FontAwesomeIcon icon={faThLarge}/>
                </div>
            </button>
            <button 
            buttonKey="list"
            onClick={() => handleClick("list")}
            className={`text-base  rounded-l-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        border duration-200 ease-in-out 
        border-teal-600 transition ` +  (selectedType === 'list' ? 'bg-teal-700 text-teal-100 outline-none' : 'bg-teal-100 text-teal-700')
            }>
                <div className="flex leading-5">
                   <FontAwesomeIcon icon={faList}/>
                </div>
            </button>
        </div>
        </ButtonContainer>       
          <TeamContainer className={"m-auto " + (selectedType === 'list' ? 'visible' : 'hidden')}>
            <TeamMembers teamMembers={teammembers}/>
          </TeamContainer>
          <TeamContainer className={"m-auto " + (selectedType === 'card' ? 'visible' : 'hidden')}>
            <TeamMembersCard teamMembers={teammembers}/>
          </TeamContainer>
        </div>
      </Layout>
    )
  
}
