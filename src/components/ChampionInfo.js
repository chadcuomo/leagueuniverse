import React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';
import ChampionQ from './ChampionQ';
import ChampionW from './ChampionW';
import ChampionE from './ChampionE';
import ChampionR from './ChampionR';
import ChampionCard from './ChampionCard';

const cards = [
  <ChampionBio />,
  <ChampionTips />,
  <ChampionQ />,
  <ChampionW />,
  <ChampionE />,
  <ChampionR />,
];

class ChampionInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 3,
    };
  }

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
          <div className="champion-details">{cards[this.state.index]}</div>
          <div className="arrow-container">
            <button className="arrow-button" />
          </div>
        </div>
        <div className="bottom-container"></div>
        {console.log(cards)}
      </div>
    );
  }
}

export default ChampionInfo;
