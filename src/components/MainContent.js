import React from 'react';
import Champion from './Champion';

class MainContent extends React.Component {
  render() {
    const filteredChamps = Object.keys(this.props.allChamps).filter(
      (filteredChamps) => {
        return filteredChamps
          .toLowerCase()
          .includes(this.props.searchfield.toLowerCase());
      }
    );
    return (
      <div className="maincontent-container">
        <div className="maincontent-inner">
          {filteredChamps.map((key) => (
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