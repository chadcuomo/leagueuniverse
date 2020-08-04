import React from 'react';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="center-container">
          <div className="center-text">
            <h2>Welcome To The League Of Legends Universe</h2>
          </div>
          <div className="center-button">
            <button>Enter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
