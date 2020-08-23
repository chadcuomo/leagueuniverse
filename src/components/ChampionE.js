import React from 'react';

class ChampionE extends React.Component {
  render() {
    const { spells } = this.props.details;
    const spellsObj = spells[Object.keys(spells)[2]];
    const img = `http://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spellsObj.id}.png`;

    return (
      <div className="info-box">
        <h4 className="info-h4">{spellsObj.name}</h4>
        <img src={img} alt="championq" className="ability-img" />
        <p className="info-paragraph">{spellsObj.description}</p>
      </div>
    );
  }
}

export default ChampionE;
