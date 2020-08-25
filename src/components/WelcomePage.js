import React from 'react';
import SVGTitle from './SVGTitle';



class WelcomePage extends React.Component {
  goToMainPage = () => {
    this.props.history.push(`/mainpage`);
  }

  getPath = () => {
    const logo = document.querySelectorAll('.svg-title path');
    for(let i = 0; i< logo.length; i++) {
      console.log(`Leter ${i} is ${logo[i].getTotalLength()}`);
    }
  }

  componentDidMount() {
    this.getPath();
  }

  render() {
    
    return (
      <div className="welcome-container">
        <div className="center-container">
          <div className="center-text">
            <SVGTitle />
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
