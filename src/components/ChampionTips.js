import React from 'react';
import PropTypes from 'prop-types';

class ChampionTips extends React.Component {
  static propTypes = {
    details: PropTypes.object,
  };

  render() {
    return (
      <div className="info-box">
        <h4 className="info-h4">Ally Tips</h4>
        <p className="info-paragraph">{this.props.details.allytips}</p>
        <h4 className="info-h4">Enemy Tips</h4>
        <p className="info-paragraph">{this.props.details.enemytips}</p>
      </div>
    );
  }
}

export default ChampionTips;
