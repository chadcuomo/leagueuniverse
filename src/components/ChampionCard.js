import React from 'react';
import ChampionInfo from './ChampionInfo';

class ChampionCard extends React.Component {
  render() {
    return (
      <div className="championcard-container">
        <div className="home-button">
          <div className="home-button-container">
            <button className="home-arrow"></button>
            <button className="home">Home</button>
          </div>
        </div>
        <div className="empty-div"></div>
        <div className="championcard-title">
          <h2>Champion Card</h2>
        </div>
        <div className="championcard-subtitle">
          <h1>Subtitle</h1>
        </div>
        <div className="empty-div2 full"></div>
        <div className="championcard-bio-button">
          <h4>Bio</h4>
          <button className="arrow-button down" />
        </div>
        <ChampionInfo />
      </div>
    );
  }
}

export default ChampionCard;
