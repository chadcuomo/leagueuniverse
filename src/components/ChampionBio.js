import React from 'react';
import PropTypes from 'prop-types';

class ChampionBio extends React.Component {
  static propTypes = {
    details: PropTypes.object,
  };

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
