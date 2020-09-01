import React from 'react';
import SVGTitle from './SVGTitle';
import SVGTitleSmall from './SVGTitleSmall';
import { gsap } from 'gsap'

class WelcomePage extends React.Component {
  goToMainPage = () => {
    this.props.history.push(`/mainpage`);
  }

  componentDidMount() {
    gsap.from('.center-button', {
      duration: 1,
      opacity: 0,
      delay: 4.5,
    });
  }

  render() {
    return (
      <div className="welcome-container">
        <div className="center-container">
          <div className="center-text">
            <SVGTitle />
            <SVGTitleSmall />
            <h2 className="welcome-text">Welcome To The League Of Legends Universe</h2>
          </div>
          <div className="center-button">
            <button
              className="grey-button"
              onClick={this.goToMainPage}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
