import React from 'react';
import ChampionInfo from './ChampionInfo';
import { gsap } from 'gsap';

class ChampionCard extends React.Component {
  constructor() {
    super();
    this.state = {
      infoShown: 0,
    }
  }

  
  revealInfo = () => {
    gsap.to('.championinfo-container', {
      duration: 1,
      y: 0,
      height: '50vh',
    });
    gsap.to('.up', {
      duration: 1.5,
      rotate: '90deg',
    });
    gsap.to('.empty-div2', {
      duration: 1,
      height: '30vh'
    });
    let infoShown = { ...this.state.infoShown };
    infoShown = 1;
    this.setState({ infoShown });
  }

  hideInfo = () => {
    gsap.to('.championinfo-container', {
      duration: 1,
      y: 1000,
      height: 0,
    });
    gsap.to('.up', {
      duration: 1.5,
      rotate: '90deg',
    });
    gsap.to('.empty-div2', {
      duration: 1,
      height: 0,
    });
    let infoShown = { ...this.state.infoShown };
    infoShown = 0;
    this.setState({ infoShown });
  }

  runInfoAnimation = () => {
    if(this.state.infoShown === 0) {
      this.revealInfo();
    }
    else
    {
      this.hideInfo();
    }

  }

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
            <button className="home-arrow" onClick={() => this.props.goHome(id)}></button>
            <button className="home" onClick={this.props.goHome}>Home</button>
          </div>
        </div>
        <div className="empty-div full"></div>
        <div className="titles">
          <div className="championcard-title">
            <h2 className="champion-title">{name}</h2>
          </div>
          <div className="championcard-subtitle">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="empty-div2"></div>
        <div className="championcard-bio-button">
          <h4>Champion Info</h4>
          <button className="arrow-button up" onClick={this.runInfoAnimation} />
        </div>
        <ChampionInfo details={this.props.details} />
      </div>
    );
  }
}

export default ChampionCard;
