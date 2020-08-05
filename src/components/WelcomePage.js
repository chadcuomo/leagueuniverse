import React from 'react';
import GreyButton from './GreyButton';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="center-container">
          <div className="center-text">
            <h2>Welcome</h2>
            <h2>To The</h2>
            <h2>League Of Legends</h2>
            <h2>Universe</h2>
          </div>
          <div className="center-button">
            <GreyButton buttonText="Enter" />
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
