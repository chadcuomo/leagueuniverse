import React from 'react';
import PropTypes from 'prop-types';

class ChampionQ extends React.Component {
  static propTypes = {
    details: PropTypes.object,
  };

  render() {
    const { spells } = this.props.details;
    const spellsObj = spells[Object.keys(spells)[0]];
    const img = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spellsObj.id}.png`;

    return (
      <div className="info-box">
        <h4 className="info-h4">{spellsObj.name}</h4>
        <img src={img} alt="championq" className="ability-img" />
        <p className="info-paragraph">{spellsObj.description}</p>
      </div>
    );
  }
}

export default ChampionQ;
