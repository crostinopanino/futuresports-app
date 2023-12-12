// src/components/Community.js
import React from 'react';
import Table from './Table.js';
import withBackground from '../Aside/withBackground.js';

const communityEvents = [
  { eventType: 'Open Day', date: '13 November', location: 'Club Ground' },
  { eventType: 'Fundraiser', date: '21 November', location: 'Club Ground' },
];

const Community = () => {
  const headers = ['Event Type', 'Date', 'Location'];
  const renderRow = (event, index) => (
    <tr key={index}>
      <td>{event.eventType}</td>
      <td>{event.date}</td>
      <td>{event.location}</td>
    </tr>
  );

  return (
    <section id="community">
      <h2>Community</h2>
      <h3>Events</h3>
      <p>Description about the community events...</p>
      <Table headers={headers} data={communityEvents} renderRow={renderRow} />
    </section>
  );
};


export default withBackground(Community);