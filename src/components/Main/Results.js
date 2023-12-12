import React from 'react';
import withBackground from '../Aside/withBackground';

const MatchResult = ({ date, awayTeamImgSrc, homeTeamImgSrc, score }) => (
  <div className="container">
    <h3>{date}</h3>
    <div className="match-container">
      <figure>
        <img src={awayTeamImgSrc} alt="Away Team Logo" />
        <figcaption>Away Team</figcaption>
      </figure>
      <div className="score">{score}</div>
      <figure>
        <img src={homeTeamImgSrc} alt="Home Team Logo" />
        <figcaption>Home Team</figcaption>
      </figure>
    </div>
  </div>
);

const mockResultsData = [
  {
    date: "November 7, 2023",
    awayTeamImgSrc: "/images/football1.png",
    homeTeamImgSrc: "/images/football2.png",
    score: "22 - 30"
  },
  {
    date: "November 8, 2023",
    awayTeamImgSrc: "/images/football3.png",
    homeTeamImgSrc: "/images/football4.png",
    score: "47 - 29"
  },
];

const Results = () => (
  <section id="results">
    <h2>Results</h2>
    {mockResultsData.map((match, index) => (
      <MatchResult 
        key={index}
        date={match.date}
        awayTeamImgSrc={match.awayTeamImgSrc}
        homeTeamImgSrc={match.homeTeamImgSrc}
        score={match.score}
      />
    ))}
  </section>
);


export default withBackground(Results);