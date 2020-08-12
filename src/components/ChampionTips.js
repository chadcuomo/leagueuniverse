import React from 'react';
import ChampionQ from './ChampionQ';
import ChampionE from './ChampionE';
import ChampionW from './ChampionW';

class ChampionTips extends React.Component {
  render() {
    return (
      <div className="tips-box">
        <ChampionQ />
        <ChampionE />
        <ChampionW />
      </div>
    );
  }
}

export default ChampionTips;
