import React from 'react';


class WelcomePage extends React.Component {
  goToMainPage = () => {
    this.props.history.push(`/mainpage`);
  }

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
