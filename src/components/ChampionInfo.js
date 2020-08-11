import React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';

class ChampionInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="championbio-container">
          <div className="left-button-container">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="left arrow-button"
            />
          </div>
          <div className="bio-container">
            <ChampionBio />
            <ChampionTips />
          </div>
          <div className="right-button-container">
            <img src="/images/arrow.png" alt="arrow" className="arrow-button" />
          </div>
        </div>
        <div className="circle-container">
          <div className="active-circle"></div>
          <div className="inactive-circle"></div>
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
