import React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';
import ChampionQ from './ChampionQ';
import ChampionW from './ChampionW';
import ChampionE from './ChampionE';
import ChampionR from './ChampionR';
import { gsap } from 'gsap';


const cards = [
  <ChampionBio  />,
  <ChampionTips />,
  <ChampionQ />,
  <ChampionW />,
  <ChampionE />,
  <ChampionR />,
];

let touchstartX = 0;
let touchendX = 0;

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
     gsap.fromTo(".champion-details", {opacity: 0, x: 170}, {opacity: 1, x: 0, duration: 1.25});
  }

  prevCard = () => {
    let index = this.state.index;
    index = (index + cards.length - 1) % cards.length;
    this.setState({ index });
    gsap.fromTo(".champion-details", {opacity: 0, x: -170}, {opacity: 1, x: 0, duration: 1.25});
  }

  handleGesture = () => {
    if (touchendX < (touchstartX - 100) ) {
      let index = this.state.index;
      index = (index + 1) % cards.length;
      this.setState({ index });
      gsap.fromTo(".champion-details", {opacity: 0, x: 170}, {opacity: 1, x: 0, duration: 1.25});
      console.log('Swiped left');
    }
    
    if (touchendX > (touchstartX + 100) ) {
      let index = this.state.index;
      index = (index + cards.length - 1) % cards.length;
      this.setState({ index });
      gsap.fromTo(".champion-details", {opacity: 0, x: -170}, {opacity: 1, x: 0, duration: 1.25});
      console.log('Swiped right');
    }
  }

  swipeStart = (e) => {
    touchstartX = e.changedTouches[0].screenX;
  }

  swipeEnd = (e) => {
    touchendX = e.changedTouches[0].screenX;
    this.handleGesture();
  }

  


  render() {
    const cards = [
      <ChampionBio details={this.props.details}  />,
      <ChampionTips details={this.props.details} />,
      <ChampionQ details={this.props.details} />,
      <ChampionW details={this.props.details} />,
      <ChampionE details={this.props.details} />,
      <ChampionR details={this.props.details} />,
    ];
    return (
      <div className="championinfo-container">
        <div className="champion-details-container">
          <div className="arrow-container">
            <button className="arrow-button left" onClick={this.prevCard} />
          </div>
          <div className="champion-details" onTouchStart={this.swipeStart} onTouchEnd={this.swipeEnd}>{cards[this.state.index] }</div>
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
