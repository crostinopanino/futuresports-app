// Sponsors.js
import React from 'react';
import withBackground from '../Aside/withBackground';
import SponsorItem from './SponsorItem';

// Array of sponsor image file names
const sponsorImageNames = [
  'sponsor1.png',
  'sponsor2.png',
  'sponsor3.png',
  'sponsor4.png',
  'sponsor5.png',
  'sponsor6.png',
];

const Sponsors = () => (
  <section id="sponsors" className="sponsors-section">
    <h2 className="sponsors-title">Meet Our Sponsors</h2>
    <div className="sponsor-grid">
      {sponsorImageNames.map((imageName, index) => (
        <SponsorItem
          key={index}
          imageName={imageName}
          alt={`Sponsor ${index + 1}`}
        />
      ))}
    </div>
  </section>
);

export default withBackground(Sponsors);