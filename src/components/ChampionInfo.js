import React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';
import ChampionQ from './ChampionQ';
import ChampionW from './ChampionW';
import ChampionE from './ChampionE';
import ChampionR from './ChampionR';


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
      index: 0,
    };
  }

  nextCard = () => {
     let index = this.state.index;
     
     index = (index + 1) % cards.length;
     this.setState({ index });
     
  }

  prevCard = () => {
    let index = this.state.index;
    index = (index + cards.length - 1) % cards.length;
    this.setState({ index });
  }

  render() {
    return (
      <div className="championinfo-container">
        <div className="champion-details-container">
          <div className="arrow-container">
            <button className="arrow-button left" onClick={this.prevCard} />
          </div>
          <div className="champion-details">{cards[this.state.index]}</div>
          <div className="arrow-container">
            <button className="arrow-button" onClick={this.nextCard} />
          </div>
        </div>
        <div className="bottom-container"></div>
      </div>
    );
  }
}

export default ChampionInfo;
