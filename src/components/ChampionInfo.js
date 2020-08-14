import React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';

class ChampionInfo extends React.Component {
  render() {
    return (
      <div className="championinfo-container">
        <div className="circles-container">
          <div className="active-circle"></div>
          <div className="inactive-circle"></div>
        </div>
        <div className="champion-details-container">
          <div className="arrow-container">
            <button className="arrow-button left" />
          </div>
          <div className="champion-details">
            <ChampionBio />
          </div>
          <div className="arrow-container">
            <button className="arrow-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
