import React from 'react';

class ChampionQ extends React.Component {
  render() {
    const { spells } = this.props.details;
    const spellsObj = spells[Object.keys(spells)[0]];
    const img = `http://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spellsObj.id}.png`;

    return (
      <div className="info-box">
        <h4 className="info-h4">{spellsObj.name}</h4>
        <img src={img} alt="championq" className="ability-img" />
        <p className="info-paragraph">{spellsObj.description}</p>
        {console.log(spells[Object.keys(spells)[0]])}
      </div>
    );
  }
}

export default ChampionQ;
