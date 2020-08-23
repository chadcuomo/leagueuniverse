import React from 'react';

class ChampionBio extends React.Component {
  render() {
    return (
      <div className="info-box">
        <h4 className="info-h4">Bio</h4>
        <p className="info-paragraph">{this.props.details.lore}</p>
      </div>
    );
  }
}

export default ChampionBio;
