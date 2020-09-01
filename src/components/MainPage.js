import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import { gsap } from 'gsap';

class MainPage extends React.Component {
  componentDidMount() {
    gsap.from('.mainheader-container', {
      duration: 0.75,
      y: -200,
      ease: 'power1.in',
      delay: 0.5,
      opacity: 0,
    });
    gsap.from('.maincontent-container', {
      duration: 0.75,
      y: 200,
      ease: 'power1.in',
      delay: 0.5,
      opacity: 0,
    });
    gsap.from('.mainheader-text', {
      duration: 2,
      opacity: 0,
      delay: 1.75,
    });
    gsap.from('.mainheader-search', {
      duration: 2,
      opacity: 0,
      delay: 2.25,
    });
    gsap.from('.maincontent-inner', {
      duration: 2,
      opacity: 0,
      delay: 2.75,
    });
  }

  render() {
    return (
      <div className="mainpage-container">
        <MainHeader searchChange={this.props.searchChange} />
        <MainContent
          allChamps={this.props.allChamps}
          searchfield={this.props.searchfield}
          getChampName={this.props.getChampName}
        />
      </div>
    );
  }
}

export default MainPage;
