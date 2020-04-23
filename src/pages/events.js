import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import ActivityCard from '../components/ActivityCard'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import activityEvents from '../../data/peer1on1_activity'
import coverPhoto from '../../content/images/cover-blue.svg'
import profilePhoto from '../images/logo.png'
import {SidebarSection} from '../components/ActivityCard/style'
import styled from 'styled-components';

// Center child divs inside parent div
const ActivitiesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ActivityCardContainer = styled.div`
    min-width: 360px;
    max-width: 420px;
    padding: 1rem;
`;

export default class Events extends Component {
/*
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      activities: [],
    }
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let activies = await response.json();

      this.setState( {activies: activies['movies'] } )
     } catch(error) {
      this.setState({ error: true });
    }
  }
 */
  sortEvents(events) {
      const filtered = events.filter(u => u.when)

      const sorted = filtered.sort(function (a, b) {
          const dateA = new Date(a.when).getTime()
          const dateB = new Date(b.when).getTime()
          return dateA > dateB ? 1 : -1
      }).reverse()

      return sorted
  }

  render() {

    const sortedEvents = this.sortEvents(activityEvents);
    const currentTime = new Date().getTime()
    let upcomingEvents = []
    let archiveEvents = []

    sortedEvents.forEach(element => {
        if (element.when.match(/ongoing/i))
        {
            upcomingEvents.push(element);
            return;
        }
        const eventDate = new Date(element.when).getTime();
        if (eventDate > currentTime)
        {
            upcomingEvents.push(element);
        } else {
            archiveEvents.push(element);
        }
    });

    let hasUpcomingEvent = upcomingEvents.length > 0;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} >
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Helmet>
        <SEO />

        <div className="container front-page" style={{maxWidth: 1000, marginTop: 30, marginBottom: 30}}>
          <h2>Upcoming events</h2>
          <ActivitiesContainer>
          {
            !hasUpcomingEvent ? 
            <p style={{fontSize: '1.25rem', color: '#6087e8'}}>There are currently no scheduled upcoming events, 
              please come back to check.</p>
            : (
              upcomingEvents.map((activity, index) => (
              <ActivityCardContainer key={`upcoming-activity-${index}`}>
                <ActivityCard 
                  coverPhoto={coverPhoto}
                  profilePhoto={profilePhoto}
                  activity={activity}
                  expandTimeline={true}
                />
              </ActivityCardContainer>
            )))
          }
          </ActivitiesContainer>

          <h2>Previous events</h2>
          <ActivitiesContainer>
          {
            archiveEvents.map((activity, index) => (
              <ActivityCardContainer key={`archived-activity-${index}`}>
                <ActivityCard 
                  coverPhoto={coverPhoto}
                  profilePhoto={profilePhoto}
                  activity={activity}
                  expandTimeline={false}
                />
              </ActivityCardContainer>
            ))
          }
          </ActivitiesContainer>
        </div>
      </Layout>
    )
  }
}

