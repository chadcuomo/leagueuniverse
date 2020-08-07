import React from 'react';
import Champion from './Champion';

class MainContent extends React.Component {
  render() {
    return (
      <div className="maincontent-container">
        <div className="maincontent-inner">
          {Object.keys(this.props.allChamps).map((key) => (
            <Champion
              key={key}
              index={key}
              details={this.props.allChamps[key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainContent;
