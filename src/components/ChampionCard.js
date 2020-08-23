import React from 'react';
import ChampionInfo from './ChampionInfo';

class ChampionCard extends React.Component {
  render() {
    const { name, id, title } = this.props.details;
    return (
      <div
        className="championcard-container"
        style={{
          backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg")`,
        }}
      >
        <div className="home-button">
          <div className="home-button-container">
            <button className="home-arrow"></button>
            <button className="home">Home</button>
          </div>
        </div>
        <div className="empty-div"></div>
        <div className="championcard-title">
          <h2 className="champion-title">{name}</h2>
        </div>
        <div className="championcard-subtitle">
          <h1>{title}</h1>
        </div>
        <div className="empty-div2 full"></div>
        <div className="championcard-bio-button">
          <h4>Champion Info</h4>
          <button className="arrow-button down" />
        </div>
        <ChampionInfo details={this.props.details} />
      </div>
    );
  }
}

export default ChampionCard;
